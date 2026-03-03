<script setup lang="ts">
import SaTooltip from "./SaTooltip.vue";
import SaButton from "../SaButton/SaButton.vue";
</script>

<template>
  <Story title="SaTooltip" icon="lucide:message-square">
    <Variant title="Positions">
      <div class="flex flex-wrap items-center gap-6 p-12">
        <SaTooltip text="Top tooltip" position="top">
          <SaButton size="sm">Top</SaButton>
        </SaTooltip>
        <SaTooltip text="Bottom tooltip" position="bottom">
          <SaButton size="sm">Bottom</SaButton>
        </SaTooltip>
        <SaTooltip text="Left tooltip" position="left">
          <SaButton size="sm">Left</SaButton>
        </SaTooltip>
        <SaTooltip text="Right tooltip" position="right">
          <SaButton size="sm">Right</SaButton>
        </SaTooltip>
      </div>
    </Variant>
    <Variant title="Custom delay">
      <div class="p-12">
        <SaTooltip text="I appear after 500ms" :delay="500">
          <SaButton size="sm" color="secondary">Hover me (slow)</SaButton>
        </SaTooltip>
      </div>
    </Variant>
  </Story>
</template>
