<template>
  <SingleProject :project="project">
    <div class="container__content-post">
      <div class="main-mockup">
        <img
          src="../assets/images/confejas/responsive-mockup-confejas.png"
          alt="Confejas mockup"
        />
      </div>

      <div class="block__divided">
        <div></div>
        <div class="block__divided-column">
          <p>
            Confejas from the acronyms “conferencia” + “jovenes adultos
            solteros” is a conference organized by The Church of Jesuschrist of
            Latter Days Saints where the youth single adults people from 18 - 31
            years old could meet YSA from other parts of Spain.
          </p>
        </div>
      </div>

      <div class="block-headline">
        <p>The Problem</p>
        <h3>
          One of the problems observed by the organizers of past conferences is
          that young people signed up for the conference at the last minute and
          also later had to answer lots of emails with questions and problems in
          registration.
        </h3>
      </div>

      <div class="block__divided">
        <div></div>
        <div class="block__divided-column">
          <p>
            I wanted to understand why the YSA were leaving the registration for
            the last minute. Through conversations, research and data it became
            clear that YSA don't feel too much attracted to the conference.
            There was not just one issue but many in how the YSA interacted and
            perceived the conference.
          </p>
          <h4>1. Poor brand image</h4>
          <p>
            The conference did not have a defined brand that conveyed its
            values.
          </p>
          <h4>2. Bad structure of information</h4>
          <p>
            The YSA wanted to know what the conference program is before they
            register.
          </p>
        </div>
      </div>

      <img src="../assets/images/confejas/brand-logo-confejas.png" alt="" />

      <div class="block__divided">
        <div>
          <h3>Branding</h3>
        </div>
        <div class="block__divided-column">
          <p>
            Clean, fresh and simple branding to differentiate us from the rest
            of YSA conferences in Europe. The idea was to transmit dynamism and
            joviality and to do so I used a warm color palette and thick
            typography.
          </p>
          <p>
            The challenge was create a joyful image of the conference persuading
            YSA from Spain to enroll early.
          </p>
        </div>
      </div>

      <p>
        <img src="../assets/images/confejas/brand-kit-confejas.png" alt="" />
      </p>

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
            second CTA is for a past conferences trailer showing all the
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
      <img src="../assets/images/confejas/mb-responsive.png" alt="mockup" />
      <img src="../assets/images/confejas/mb-responsive-2.png" alt="mockup" />
    </div>
  </SingleProject>
</template>

<script setup>
import SingleProject from "../components/SingleProject.vue";
import style from "../assets/css/style-post.css";

const project = {
  title: "Confejas - Youth Single Adult Spain Conference",
  rol1: "Branding",
  rol2: "UX design, UI design",
  rol3: "Web development",
  result1: "Transmit a consistent image",
  result2: "Fill the places before the deadline",
};
</script>

<style scoped></style>
