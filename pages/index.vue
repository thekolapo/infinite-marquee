<template>
  <div class="home">
    <p class="home__title">Beautiful Cities 🌆</p>
    <section ref="cities" class="home__cities">
      <div class="home__cities-row animation">
        <p v-for="(i, index) in 2" :key="index">
          <span v-for="j in 4" :key="j" :data-text="cities[j - 1]">
            {{ cities[j - 1] }}
          </span>
        </p>
      </div>
      <div class="home__cities-row animation">
        <p v-for="(i, index) in 2" :key="index">
          <span v-for="j in 4" :key="j" :data-text="cities[j - 1]">
            {{ cities[j - 1] }}
          </span>
        </p>
      </div>
      <div ref="cityImage" class="home__cities-image">
        <img
          data-img="San Francisco"
          src="@/assets/images/cities/san-francisco.jpg"
          alt="Golden gate bridge image"
        />
        <img
          data-img="Tokyo"
          src="@/assets/images/cities/tokyo.jpg"
          alt="Tokyo image"
        />
        <img
          data-img="Lagos"
          src="@/assets/images/cities/lagos.jpg"
          alt="Lagos image"
        />
        <img
          data-img="Venice"
          src="@/assets/images/cities/venice.jpg"
          alt="Venice image"
        />
      </div>
    </section>
    <footer>
      Made with love & music by
      <a href="https://twitter.com/kolapo_" target="_blank">Kolapo </a> 💛
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: ['Lagos', 'Tokyo', 'Venice', 'San Francisco'],
    }
  },
  mounted() {
    setTimeout(() => {
      this.initCitiesAnimation()
    }, 10)
  },
  methods: {
    initCitiesAnimation() {
      let windowWidth = window.innerWidth
      const citiesRows = this.$refs.cities.querySelectorAll('.home__cities-row')
      const cityNames = this.$refs.cities.querySelectorAll(
        '.home__cities-row span'
      )

      const setRowAnimationValues = () => {
        citiesRows.forEach((row) => {
          const rowParagraphWidth = row.querySelector('p').offsetWidth
          const translateValue = (rowParagraphWidth / windowWidth) * 100
          row.style.setProperty('--translate-value', translateValue)
          row.style.setProperty('--anim-play-state', 'initial')
          row.classList.remove('animation')
          setTimeout(() => {
            row.classList.add('animation')
          }, 10)
        })
      }
      const showCityImage = (city) => {
        const citiesSectionTopOffset =
          this.$refs.cities.getBoundingClientRect().top
        const elRect = city.getBoundingClientRect()
        const elWidth = elRect.width
        const elHeight = elRect.height
        const elOffsetX = elRect.left
        const elOffsetY = elRect.top

        let xPosition
        if (elOffsetX < window.innerWidth / 2) {
          xPosition = elWidth + elOffsetX + 15
        } else {
          const cityImageWidth =
            this.$refs.cityImage.getBoundingClientRect().width
          xPosition = elOffsetX - cityImageWidth - 15
        }
        const yPosition =
          elOffsetY +
          elHeight / 2 -
          citiesSectionTopOffset -
          this.$refs.cityImage.getBoundingClientRect().height / 2

        const selectedCityText = city.getAttribute('data-text')
        const cityImage = this.$refs.cityImage.querySelector(
          `img[data-img="${selectedCityText}"]`
        )

        cityImage.style.setProperty('--opacity', '1')
        this.$refs.cityImage.style.setProperty('--x-position', `${xPosition}px`)
        this.$refs.cityImage.style.setProperty('--y-position', `${yPosition}px`)
      }
      const hideCityImage = (city) => {
        const yPosition = this.$refs.cityImage.getBoundingClientRect().top + 70

        const selectedCityText = city.getAttribute('data-text')
        const cityImage = this.$refs.cityImage.querySelector(
          `img[data-img="${selectedCityText}"]`
        )
        cityImage.style.setProperty('--opacity', '0')

        this.$refs.cityImage.style.setProperty('--y-position', `${yPosition}px`)
      }
      const handleCityHover = () => {
        cityNames.forEach((city) => {
          city.addEventListener('mouseenter', () => {
            if (windowWidth < 768) return
            showCityImage(city)
          })
          city.addEventListener('mouseleave', () => {
            if (windowWidth < 768) return
            hideCityImage(city)
          })
        })
      }
      const handleResize = () => {
        const newWidth = window.innerWidth
        if (windowWidth !== newWidth) {
          windowWidth = newWidth
          setRowAnimationValues()
        }
      }

      setRowAnimationValues()
      handleCityHover()
      window.addEventListener('resize', handleResize, false)
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/pages/home.scss';
</style>
