<script>
  import configuration from "$lib/config";

  let more = configuration.more;
  let userName = configuration.personal.firstName;
</script>

<section class="more">
  <h1>More About Me</h1>
    <div>
    {#each Object.entries(more) as [socialName, socialLink]}
      <a href={socialLink} target="__blank" alt={userName + "'s " + socialName}>
        {socialName}
      </a>
    {/each}
  </div>
</section>

<style>
  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    color: currentColor;
  }

  div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    column-gap: 60px;
    padding-bottom: 20px;
  }

  .more {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 95%;
    margin: 8% 0% 0% 5%;
    column-gap: 100%;
    min-height: 70px;
  }

  .more a {
    color: currentColor;
    font-size: 2vw;
    text-decoration: none;
    text-transform: capitalize;
    font-family: "Poppins", sans-serif;
    padding-bottom: 6px;
  }

  .more a:hover {
    padding-bottom: 0;
    border-bottom: 6px solid #0190cd;
  }

  /** Mobile */
  @media (max-width: 768px) {
    h1 {
      font-size: 20px;
    }
    
    .more {
      margin: 10% 0% 0% 5%;
    }

    .more a {
      font-size: 16px;
    }

  }
</style>
