<template>
  <PageProject :project="project[1]">
    <div class="container__content-post">
      <div class="block__divided">
        <div></div>
        <div class="block__divided-column">
          <p>
            Confejas is a conference organized by The Church of Jesus Christ of
            Latter-day Saints where the Young Single Adults people from 18 - 31
            years old could meet YSA from other parts of Spain.
          </p>
        </div>
      </div>

      <div class="block-headline">
        <p>The Problem</p>
        <h3>
          One of the problems observed by the organizers is that YSA enroll for
          the conference at the last week.
        </h3>
      </div>

      <div class="block__divided">
        <div></div>
        <div class="block__divided-column">
          <p>
            This problem made it difficult to properly organize the conference
          </p>
          <p>
            I wanted to understand why the users were leaving the registration
            for the last minute. Through conversations and data it became clear
            that users don't feel too much attracted to the conference. There
            was not just one issue but many in how the users interacted and
            perceived the conference.
          </p>
          <h4>1. Poor brand image</h4>
          <p>
            The conference did not have a defined brand that transmit its
            values.
          </p>
          <h4>2. Bad structure of information</h4>
          <p>
            The website didn't had all the information. The user wants to know
            what the conference program will be before registering.
          </p>
        </div>
      </div>

      <img
        src="../assets/images/confejas/brand-mockup.webp"
        alt="confejas brand"
      />

      <div class="block__divided">
        <div>
          <h3>Branding</h3>
        </div>
        <div class="block__divided-column">
          <p>
            Clean, fresh and simple branding to differentiate from the rest of
            YSA conferences in Europe. The idea was to transmit dynamism and
            joviality and to do so I used a warm color palette and thick
            typography.
          </p>
          <p>
            The challenge was create a joyful image of the conference persuading
            YSA from Spain to enroll early.
          </p>
        </div>
      </div>

      <img
        src="../assets/images/confejas/brand-kit-mockup.webp"
        alt="brand kit mockup"
        
      />

      <div class="block__divided">
        <div>
          <h3>Website</h3>
        </div>
        <div class="block__divided-column">
          <p>
            Space where you can find all the information about the conference
            and register for it.
          </p>
          <p>
            I simplified the structure of the website, so we have a hero section
            where the primary CTA is to register for the conference and the
            second CTA is for watch a past conferences trailer showing all the
            activities. Only above the fold is shown all the main information.
            When, where and what is Confejas.
          </p>
          <p>
            Below the fold we had a program summary and a FAQ section. These two
            sections reduced the amount of received emails with questions and
            doubts. Now the user has all the information in one only place.
          </p>
        </div>
      </div>

      <div style="position: relative; padding-bottom: 56.25%; height: 0">
        <iframe
          src="https://www.loom.com/embed/77efca4f13d64742a31c85ec0cfef2ff"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        ></iframe>
      </div>
      <img
        src="../assets/images/confejas/mb-1-mockup.webp"
        alt="mockup mobile"
        
      />
      <img
        src="../assets/images/confejas/mb-2-mockup.webp"
        alt="mockup mobile 2"
        
      />
    </div>
  </PageProject>
</template>

<script setup>
import PageProject from "../components/projects/PageProject.vue";
import project from "../data/projects";
</script>

<style src="../assets/css/style-post.css"></style>
