<template>
  <div class="home font-sans">
    <CarbidHeader> </CarbidHeader>
    <CarbidHeroBanner> </CarbidHeroBanner>
    <CarbidecentVehicles> </CarbidecentVehicles>
    <div>

            <h1> A BODY SECTION GOES HERE </h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CarbidHeader from '@/components/Header.vue'
import CarbidHeroBanner from '@/components/HeroBanner.vue'
import CarbidecentVehicles from '@/components/RecentVehicles.vue'

export default {
  name: 'Home',
  components: {
    CarbidHeader,
    CarbidHeroBanner,
    CarbidecentVehicles
  }
}
</script>
