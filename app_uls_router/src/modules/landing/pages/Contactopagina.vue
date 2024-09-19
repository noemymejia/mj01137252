<template>
  <section class="text-gray-600 body-font relative h-screen w-screen">
    <div class="absolute inset-0 h-full w-full">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=Biblioteca%20Nacional%20de%20El%20Salvador&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        class="opacity-75"
      ></iframe>
    </div>
    <div class="container px-5 py-24 mx-auto flex items-center justify-center h-full">
      <div class="bg-white rounded-lg p-8 flex flex-col w-full md:w-1/2 lg:w-1/3 relative z-10 shadow-md">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
        <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe.</p>
        
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
          <textarea
            id="message"
            v-model="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        
        <button @click="submitForm" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Submit
        </button>
        
        <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      if (this.email && this.message) {
        // Aquí puedes manejar la lógica para enviar el formulario, como validar datos o hacer una llamada a una API.
        console.log('Email:', this.email);
        console.log('Message:', this.message);
        
        // Resetear el formulario después de enviarlo, si lo deseas
        this.email = '';
        this.message = '';
      } else {
        alert('Por favor, completa todos los campos.');
      }
    }
  }
};
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos para el componente */
html, body, #app, #__nuxt, .text-gray-600 {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
