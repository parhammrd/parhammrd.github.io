<script context="module">
  import configuration from "$lib/config";
  import Background from "$lib/components/Background.svelte";
  import Avatar from "$lib/components/Avatar.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import Titles from "$lib/components/Titles.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Socials from "$lib/components/Socials.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import More from "$lib/components/More.svelte";
  import Interest from "$lib/components/Interest.svelte";

  let { personal, socials } = configuration;
</script>

<svelte:head>
  <title>
    {personal.firstName}
    {personal.lastName}
    | {personal.description}
  </title>
  <!-- description meta header -->
  <meta name="description" content={personal.description} />
</svelte:head>

<Background>
  <Avatar />
  <Titles />
  <Socials />
  <Interest />
  <Skills />
  {#if socials.scroll}
  <Projects />
  {/if}
  <More />
  <Contact />
</Background>

<style>
</style>
