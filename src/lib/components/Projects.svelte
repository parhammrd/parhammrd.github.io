<script>
  import { onMount } from "svelte";
  import configuration from "$lib/config";
  import Card from "./Card.svelte";

  let githubProjects;
  let githubProjectsLoading = false;
  let githubProjectsLoadingError = null;

  // fetch Projects from medium
  async function fetchProjects() {
    const response = await fetch(
          "https://api.github.com/users/parhammrd/repos?per_page=100&type=public"
      );
      const data = await response.json();
      return data;
  }

  function resetLoadings() {
    githubProjectsLoading = false;
    githubProjectsLoadingError = null;
  }

  onMount(() => {
    githubProjectsLoading = true;
    fetchProjects()
      .then((projects) => {
        githubProjects = projects.filter(project => 
        project.description && project.description.includes("#Project")
      );
        resetLoadings();
      })
      .catch((error) => {
        githubProjectsLoadingError = error.message;
        resetLoadings();
      });
  });
</script>

<section class="projects" id="projects">
  <h1>Projects</h1>
  {#if githubProjects}
    <div>
      {#each githubProjects as project}
        <Card {project} />
      {/each}
    </div>
  {/if}
</section>

<style lang="scss">
  .projects {
    margin-top: 80px;
    margin-left: 5%;
    min-height: 600px;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 9vw;
    margin-bottom: 10px;
    color: currentColor;
  }

  div {
    width: 90vw;
    display: flex;
    flex-flow: row wrap;
    column-gap: 3%;
    row-gap: 30px;
    padding-bottom: 100px;
  }

  /** Mobile */
  @media (max-width: 768px) {
    .projects {
      margin-top: 10%;
    }

    h1 {
      font-size: 80px;
    }

    div {
      width: 90vw;
      display: flex;
      flex-flow: row wrap;
      column-gap: 3%;
      row-gap: 30px;
      padding-bottom: 100px;
    }
  }
</style>
