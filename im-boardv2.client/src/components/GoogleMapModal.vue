<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="googleMapModal"
    tabindex="-1"
    aria-labelledby="googleMapModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d46217.91764516449!2d-116.3436803430798!3d43.61445619445511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slocal%20game%20stores%20near%20me!5e0!3m2!1sen!2sus!4v1666059193372!5m2!1sen!2sus"
          width="600"
          height="500"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
