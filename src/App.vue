
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useRouter } from 'vue-router';

import IconHamburgerClosed from './components/icons/IconHamburgerClosed.vue'
import IconHamburgerOpen from './components/icons/IconHamburgerOpen.vue'

// Refs to elements
const navMenu = ref<HTMLElement | null>(null);
const buttonNav = ref<HTMLElement | null>(null);
const openHamburgerMenu = ref<HTMLElement | null>(null);
const closeHamburgerMenu = ref<HTMLElement | null>(null);

const router = useRouter();

// Function to toggle visibility
function visibilityNavMobile() {
  if (navMenu.value && openHamburgerMenu.value && closeHamburgerMenu.value) {
    navMenu.value.classList.toggle('visible');
    navMenu.value.setAttribute('aria-hidden', navMenu.value.classList.contains('visible') ? 'false' : 'true');
    navMenu.value.classList.add('nav_open');
    openHamburgerMenu.value!.classList.add('invisible');
    closeHamburgerMenu.value!.classList.remove('invisible');
  }
}

function closeNav() {
  if (navMenu.value && openHamburgerMenu.value && closeHamburgerMenu.value) {
    navMenu.value.classList.remove('visible');
    navMenu.value.setAttribute('aria-hidden', 'true');
    openHamburgerMenu.value.classList.remove('invisible');
    closeHamburgerMenu.value.classList.add('invisible');
  }
}


// Setup event listener on mounted
onMounted(() => {
  if (buttonNav.value) {
    buttonNav.value.addEventListener('click', visibilityNavMobile);
  }
      router.afterEach(closeNav);
});

</script>

<template>


  <header>

    <RouterLink to="/"> <h1> Sindy </h1> </RouterLink>

		<nav>
			<button title="open menu" ref="buttonNav">

			<IconHamburgerClosed ref="openHamburgerMenu" /> 

      <IconHamburgerOpen ref="closeHamburgerMenu" class="invisible"/> 

			</button>

			<ul aria-hidden="true" ref="navMenu">
        <li> <RouterLink to="/"> //home </RouterLink> </li>
				<li> <RouterLink to="/overmij"> //over mij </RouterLink> </li>
				<li> <RouterLink to="/projecten"> //projecten </RouterLink> </li>
				<li> <RouterLink to="/cv"> //cv </RouterLink> </li>
				<li> <RouterLink to="/contact">//contact </RouterLink> </li>
			</ul>
		</nav>

    
  </header>



    <router-view v-slot="{ Component }" :key="$route.path">
  <transition name="page-opacity" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>

    <!-- <Transition name="page-opacity" mode="out-in">
    <router-view :key="$route.path"> 
    </router-view>
    </Transition> -->



    <footer>
      <h2 id="contact"> contact </h2>

			<ul>
				<li> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 38 30" fill="none">
						<path
							d="M3.75 30C2.71875 30 1.83625 29.6331 1.1025 28.8994C0.36875 28.1656 0.00125 27.2825 0 26.25V3.75C0 2.71875 0.3675 1.83625 1.1025 1.1025C1.8375 0.36875 2.72 0.00125 3.75 0H33.75C34.7812 0 35.6644 0.3675 36.3994 1.1025C37.1344 1.8375 37.5012 2.72 37.5 3.75V26.25C37.5 27.2813 37.1331 28.1644 36.3994 28.8994C35.6656 29.6344 34.7825 30.0012 33.75 30H3.75ZM18.75 16.875L33.75 7.5V3.75L18.75 13.125L3.75 3.75V7.5L18.75 16.875Z"
							fill="#E3000B" />
					</svg>
					<a href="mailto:sindymdejong@gmail.com"> "<strong>sindymdejong@gmail.com</strong>"</a>
				</li>
				<li>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 38 38" fill="none">
						<path
							d="M37.4775 28.3271C37.1432 30.8678 35.8955 33.1999 33.9673 34.8879C32.0392 36.5758 29.5626 37.5042 27 37.4996C12.1125 37.4996 1.69662e-05 25.3871 1.69662e-05 10.4996C-0.00457675 7.93704 0.923805 5.46041 2.61177 3.5323C4.29973 1.60419 6.63184 0.356446 9.17252 0.0221206C9.81499 -0.0563277 10.4656 0.0751116 11.0272 0.396818C11.5889 0.718524 12.0314 1.21324 12.2888 1.80712L16.2488 10.6477V10.6702C16.4458 11.1248 16.5272 11.6212 16.4856 12.1149C16.4441 12.6086 16.2809 13.0843 16.0106 13.4996C15.9769 13.5502 15.9413 13.5971 15.9038 13.644L12 18.2715C13.4044 21.1252 16.3894 24.084 19.2806 25.4921L23.8444 21.609C23.8892 21.5713 23.9361 21.5362 23.985 21.504C24.3999 21.2273 24.8773 21.0583 25.374 21.0125C25.8706 20.9667 26.3708 21.0454 26.8294 21.2415L26.8538 21.2527L35.6869 25.2109C36.2818 25.4673 36.7777 25.9095 37.1005 26.4712C37.4233 27.0329 37.5555 27.684 37.4775 28.3271Z"
							fill="#E3000B" />
					</svg>
					<a href="tel:0646854712"> "<strong>0646854712</strong>"</a>
				</li>
				<li>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 37 38" fill="none">
						<path
							d="M0 3.14964C0 1.68582 1.21637 0.499512 2.71719 0.499512H34.2828C35.7836 0.499512 37 1.68582 37 3.14964V34.8494C37 36.3132 35.7836 37.4995 34.2828 37.4995H2.71719C1.21637 37.4995 0 36.3132 0 34.8494V3.14964ZM11.4307 31.4731V14.7653H5.87838V31.4731H11.4307ZM8.65569 12.4829C10.5913 12.4829 11.7961 11.2018 11.7961 9.59689C11.7614 7.95732 10.5936 6.71089 8.69269 6.71089C6.79181 6.71089 5.55 7.95964 5.55 9.59689C5.55 11.2018 6.75481 12.4829 8.61869 12.4829H8.65569ZM20.0054 31.4731V22.1422C20.0054 21.6427 20.0424 21.1432 20.1904 20.7871C20.5905 19.7904 21.5039 18.7567 23.0394 18.7567C25.049 18.7567 25.8514 20.2876 25.8514 22.5353V31.4731H31.4037V21.8901C31.4037 16.7564 28.6658 14.3699 25.012 14.3699C22.0659 14.3699 20.7454 15.9886 20.0054 17.1287V17.1865H19.9684L20.0054 17.1287V14.7653H14.4554C14.5248 16.3332 14.4554 31.4731 14.4554 31.4731H20.0054Z"
							fill="#E3000B" />
					</svg>
					<a href="https://www.linkedin.com/in/sindy-de-jong-049057226/"> "<strong>linkedin.com/sindy-de-jong</strong>"</a>
				</li>

           <li> 
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <path d="M17.5 0C15.2019 0 12.9262 0.463889 10.803 1.36518C8.67984 2.26647 6.75066 3.58752 5.12563 5.25289C1.84374 8.61625 0 13.178 0 17.9345C0 25.8615 5.0225 32.5869 11.97 34.9722C12.845 35.1157 13.125 34.5597 13.125 34.0755V31.0446C8.2775 32.1206 7.245 28.6413 7.245 28.6413C6.44 26.561 5.3025 26.005 5.3025 26.005C3.71 24.893 5.425 24.9289 5.425 24.9289C7.175 25.0545 8.1025 26.7762 8.1025 26.7762C9.625 29.5022 12.1975 28.6952 13.195 28.2647C13.3525 27.099 13.8075 26.3099 14.2975 25.8615C10.4125 25.4131 6.335 23.8708 6.335 17.0377C6.335 15.047 7 13.4509 8.1375 12.1775C7.9625 11.7291 7.35 9.86396 8.3125 7.44281C8.3125 7.44281 9.7825 6.95858 13.125 9.27212C14.5075 8.87756 16.0125 8.68028 17.5 8.68028C18.9875 8.68028 20.4925 8.87756 21.875 9.27212C25.2175 6.95858 26.6875 7.44281 26.6875 7.44281C27.65 9.86396 27.0375 11.7291 26.8625 12.1775C28 13.4509 28.665 15.047 28.665 17.0377C28.665 23.8887 24.57 25.3952 20.6675 25.8436C21.2975 26.3995 21.875 27.4935 21.875 29.1615V34.0755C21.875 34.5597 22.155 35.1336 23.0475 34.9722C29.995 32.569 35 25.8615 35 17.9345C35 15.5793 34.5474 13.2472 33.6679 11.0712C32.7884 8.89534 31.4994 6.91825 29.8744 5.25289C28.2493 3.58752 26.3202 2.26647 24.197 1.36518C22.0738 0.463889 19.7981 0 17.5 0Z" fill="#E3000B"/>
</svg>
       <a href="https://www.linkedin.com/in/sindy-de-jong-049057226/"> "<strong>github.com/sindydejong</strong>"</a>
      </li>

			</ul>

   

    </footer>


</template>



<style lang="scss">

@import './assets/global.scss';


/****************************/
/* START CODE: HEADER */
/****************************/

.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 600ms ease all;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}


header {
  background-color: $color-red;
  display: flex;
  align-items: center;
  width: 100vw;

  h1 {
    margin: 0em auto 0em 1em;
    width: auto;
    font-size: 24px;
  }
}

/****************************/
/* END CODE: HEADER */
/****************************/

/****************************/
/* START CODE: NAV */
/****************************/

header {
  height: 6vh;
  position: sticky;
  top: 0;
  z-index: 10;

  a:first-of-type {
text-decoration: none;
  }

  button:first-of-type {
    margin: 0em 4em 0em auto;
    background: transparent;
    border: none;
    z-index: 2;
    width: 50px;
    cursor: pointer;

    // img {
    //   width: 50px;
    //   order: 1;
    // }
  }

  nav {
    position: relative;
    display: flex;
    width: 80vw;
    z-index: 2;
    align-items: center;
    margin-top: 0em;
    justify-content: center;

    svg {
      height: 30px;
    }

    ul {
      background-color: white;
      padding: 1em 1em 1em 2em;
      position: absolute;
      top: 3.3vh;
      right: 0;
      width: 90%;
      display: none;

      li {
        list-style: none;
        text-align: left;
        margin: 1em 0em 1em 0em;

        a {
          color: $color-red;
          text-decoration: none;
          font-family: Arial;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;

          &:hover {
            color: $color-red;
          }
        }
      }
    }

    .visible {
      display: block;
    }

    .invisible {
      display: none;
    }

    .nav_open {
      animation: fadeIn 0.5s ease-out;

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @keyframes fadeIn {
        0% {
          transform: translateY(-20vh);
        }

        100% {
          transform: translateY(0vh);
        }
      }
    }
  }



  @media screen and (min-width: 1000px) {

    header {
      display: flex;
      justify-content: right;
      align-items: center;
      height: 3em;

      h1 {
        width: auto;
        font-size: 25px;
      }
    }

    nav {
      position: static;
      margin-top: 0em;
      margin-right: 10vw;

      ul {
        display: block;
        display: flex;
        background-color: transparent;
        justify-content: flex-end;
        position: absolute;
        padding: 0px;
        margin: 0;
        width: auto;
        top: auto;
        right: 10vw;

        li {
          margin-left: 2em;
          margin-right: 2em;
          padding: 0;

          a {
            color: white;
            font-size: 25px;

            &:hover {
              color: $color-background-main;
            }
          }
        }
      }

      button {
        display: none;
      }
    }
  }
}

/****************************/
/* END CODE: NAV */
/****************************/

/****************************/
/* START CODE: FOOTER*/
/****************************/

footer {
  width: 90vw;
  margin-top: 8vw;
  margin-bottom: 10vw;
  order: 5;

  h2 {
    margin-left: 0.5em;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 1em;
      display: flex;
      align-items: center;

      a {
        font-family: Arial;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: none;
        margin-left: 9px;

      }

      strong {
        color: white;
        text-decoration: underline;

        &:hover {
          color: $color-red;
        }
      }
    }
  }

  @media screen and (min-width: 1000px) {

    footer {
      order: 5;

      h2 {
        font-size: 36px;
      }

      ul li a {
        font-size: 24px;
      }
    }
  }
}

/****************************/
/* END CODE: FOOTER*/
/****************************/

</style>
