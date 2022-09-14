<template>
  <PageProject :project="project[0]">
    <div class="container__content-post">
      <div class="block__divided">
        <div></div>
        <div class="block__divided-column">
          <p>
            Sartorial Class is a membership site of online bespoke tailoring
            courses that aims to teach the ancient craft of the artisan tailor.
            Online platform for tailoring apprentice.
          </p>
        </div>
      </div>

      <div class="block__divided">
        <div>
          <h3>Challenge</h3>
        </div>
        <div class="block__divided-column">
          <p>
            The idea of an online tailoring academy started with a conversation
            with my master tailor teacher while we were working in the workshop.
          </p>
          <p>
            There are 2 options if you want to learn bespoke tailoring. Start as
            a tailoring apprentice, which is extremely difficult since the vast
            majority of ancient tailors don't want to teach their technics to
            anyone. The other option is to study at a specialized bespoke
            tailoring academy. The drawback is that there are very few schools
            (only one in Spain) and they are also expensive.
          </p>
          <img
            src="../assets/images/sartorial-class/tailor-luis.png"
            alt="Luis Tailor"
            v-motion-fade-visible-once
          />
          <figcaption>Me as apprentice</figcaption>
        </div>
      </div>

      <div class="block__divided">
        <div></div>
        <div class="block__divided-column">
          <p>
            To be sure I was covering the real problem I did a basic research
            using google trend, checking other online tailoring academies and
            making interviews with my tailoring classmates.
          </p>
        </div>
      </div>

      <div class="block__divided">
        <div>
          <h3>Research</h3>
        </div>
        <div class="block__divided-column">
          <p>With data in hand I could see 3 user profiles:</p>
          <h4>01 - The apprentice</h4>
          <p>
            The one who wants to learn all the ancient techniques and work as a
            tailor apprentice in a tailor shop.
          </p>
          <p>Pain point: Many tailors not accept new apprentices.</p>
          <h4>02 - The professional</h4>
          <p>
            Those who are already in the fashion design sector and want to
            improve or learn sartorial techniques to improve their workmanship.
          </p>
          <p>
            Pain point: The tailoring schools are very expensive (+400€ per
            month).
          </p>
          <h4>03 - The enthusiast</h4>
          <p>
            The one who sews is a hobby and just has fun and wants to do things
            for oneself.
          </p>
          <p>
            Pain point: Inability to travel. The tailoring schools are in the
            capital or in other countries.
          </p>
        </div>
      </div>
      <img
        src="../assets/images/sartorial-class/web-mockup.png"
        alt="mockup web"
        v-motion-fade-visible-once
      />

      <div class="block__divided">
        <div></div>
        <div class="block__divided-column">
          <p>
            With this in mind I check the surveys I did and I find that the
            first thing the user wants to learn is to cut and sew a bespoke
            jackets. So the courses should be focused on that.
          </p>
        </div>
      </div>

      <div class="block-headline">
        <h3>
          The best thing about creating a product from scratch is that you can
          experiment fearless of losing too much.
        </h3>
      </div>

      <div class="block__divided">
        <div></div>
        <div class="block__divided-column">
          <p>
            The first approach was to create full video tutorials of how to make
            a suit and then offer it on a landing page. But this had a lot of
            inconveniences like we have to create entire long videos without
            knowing if the user needs this.
          </p>
          <p>
            I found that a membership site might be a better solution. We could
            start with some video tutorials at a very low monthly price and see
            if the user likes it and if not, receive feedback and iterate. This
            approach benefit the user obtaining a high value content at low
            entry price and benefit the creator validate the idea.
          </p>
        </div>
      </div>
      <div style="position: relative; padding-bottom: 56.25%; height: 0">
        <iframe
          src="https://www.loom.com/embed/93a9a3faebda4d1cb864974f70176ac4"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        ></iframe>
      </div>
      <div class="block__divided">
        <div>
          <h3>Website</h3>
        </div>
        <div class="block__divided-column">
          <p>
            The website is simple and effective. In the home would be all the
            courses so that the users can see everything is offered from the
            beginning. Copying a bit the model of the streaming platform where
            they let you see all the content available before you have to
            subscribe.
          </p>
          <p>
            The content can be seen by all the users but only the videos and
            comments are available for subscribers. Also this technique improves
            the SEO of the website since it allows all the content to be indexed
            by google.
          </p>
        </div>
      </div>
      <div style="position: relative; padding-bottom: 56.25%; height: 0">
        <iframe
          src="https://www.loom.com/embed/0bf0806923c34d4387a5d1e487cf6f58"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        ></iframe>
      </div>

      <img
        src="../assets/images/sartorial-class/mb-mockup.png"
        alt="mockup mobile"
        v-motion-fade-visible-once
      />
    </div>
  </PageProject>
</template>

<script setup>
import PageProject from "../components/projects/PageProject.vue";
import project from "../data/projects.js";
import style from "../assets/css/style-post.css";
</script>

<style scoped></style>
