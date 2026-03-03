<script setup lang="ts">
import SaCard from "./SaCard.vue";
import SaButton from "../SaButton/SaButton.vue";
</script>

<template>
  <Story title="SaCard" icon="lucide:square">
    <Variant title="Full card">
      <SaCard class="max-w-sm">
        <template #image>
          <img src="https://picsum.photos/400/200" alt="Sample" />
        </template>
        <template #title>Card Title</template>
        <template #body>
          This is the card body content. It provides additional detail and
          context about the card subject.
        </template>
        <template #actions>
          <SaButton size="sm">Action</SaButton>
          <SaButton size="sm" color="tertiary">Cancel</SaButton>
        </template>
      </SaCard>
    </Variant>
    <Variant title="Without image">
      <SaCard class="max-w-sm">
        <template #title>Simple Card</template>
        <template #body> A card without an image section. </template>
      </SaCard>
    </Variant>
    <Variant title="Title only">
      <SaCard class="max-w-sm">
        <template #title>Minimal Card</template>
      </SaCard>
    </Variant>
  </Story>
</template>
