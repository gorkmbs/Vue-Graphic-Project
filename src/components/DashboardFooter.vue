<template>
  <footer class="fixed-bottom">
    <div
      class="d-flex justify-content-start"
      :style="{
        width: windowWidth - 150 + 'px',
        transform:
          windowWidth > 950 || showSidebar ? 'translate(150px, 0px)' : '',
        background: 'rgba(255,255,255,1)',
      }"
    >
      <p class="m-1 p-1 text-dark">
        Copyright © 2021
        <span :style="{ color: 'rgba(0,50,200,1)' }"
          ><a
            class="linkWithoutBlueUnderline"
            href="https://gorkem-bugra-sarac.netlify.app/"
            target="_blank"
            >tamzirtapoz</a
          ></span
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["windowWidth", "showSidebar"],
};
</script>
