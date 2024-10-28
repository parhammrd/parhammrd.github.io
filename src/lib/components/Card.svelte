<script>
  import configuration from "$lib/config";

  export let project;
</script>

<a href={project.html_url} target="__blank">
  <div>
    <h1>{@html project.name}</h1>
    <p class='desc'>{project.description}</p>
    <p class='date'>{project.created_at.split("T")[0]}</p>
  </div>
</a>

<style>
  a {
    text-decoration: none;
    width: 270px;
    height: 230px;
    color: #222;
  }

  div {
    display: inline-block;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-width: 2px;
    border-color: #0190cd;
    box-shadow: 3px 3px 0 0 #0190cd;
    transition: all 200ms ease;
    background-color: white;
    -webkit-transition: all 200ms ease;
  }

  div:hover {
    box-shadow: 6px 6px 0 0 #0190cd;
  }

  h1 {
    font-size: 25px;
    font-family: "Poppins", sans-serif;
    line-height: 1.9rem;
    margin: 10px 15px;
  }

  .desc {
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    margin: 5px 15px;
    color: currentColor;
    bottom: 5px;
  }
  .date {
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    margin: 0 15px;
    color: currentColor;
    position: absolute;
    bottom: 5px;
  }

  /** Mobile */
  @media (max-width: 768px) {
    a {
      width: 90vw;
      height: 230px;
    }

    div {
      width: 90vw;
      height: 100%;
    }

    h1 {
      font-size: 30px;
    }

    .desc {
      font-size: 15px;
    }
    .date {
      font-size: 15px;
    }
  }
</style>
