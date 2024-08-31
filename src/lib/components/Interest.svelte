<script>
  import configuration from "$lib/config";

  let { InterestedArea } = configuration.personal;
  // let interests_list = Object.keys(InterestedArea);
</script>

<section class="interests">
  <h1>Interests</h1>
    <div>
      <ul>
        {#each InterestedArea as interestTitle}
          <li>{interestTitle}</li>
          {/each}
      </ul>
    </div>
</section>

<style lang="scss">
  .interests {
    margin-top: 80px;
    margin-left: 5%;
    min-height: 50px;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 9vw;
    color: currentColor;
  }

  div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding-bottom: 30px;
  }

  ul {
    font-family: "Poppins", sans-serif;
    font-size: 3vw;
    color: currentColor;
    display: flex;
    flex-flow: row wrap;
    column-gap: 5%;
    max-width: 50%;
    list-style: none;
  }

  ul li::before {
    content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: #0190cd; /* Change the color */
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -0.5em; /* Also needed for space (tweak if needed) */
  }

  /** Mobile */
  @media (max-width: 768px) {
    .interests {
      margin-top: 70px;
    }

    h1 {
      font-size: 80px;
    }

    div {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      column-gap: 60px;
      padding-bottom: 30px;
    }

    ul {
      font-family: "Poppins", sans-serif;
      font-size: 18px;
      color: currentColor;
      display: flex;
      flex-flow: row wrap;
      column-gap: 1.5%;
      max-width: 50%;
      list-style: none;
    }

    ul li::before {
      content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
      color: #0190cd; /* Change the color */
      font-weight: bold; /* If you want it to be bold */
      display: inline-block; /* Needed to add space between the bullet and the text */
      width: 15px; /* Also needed for space (tweak if needed) */
      margin-left: 5px; /* Also needed for space (tweak if needed) */
    }
  }
</style>
