<template>
    <div>
        <!-- CONTENIDO PARA LA VISTA DE 'SOBRE MÍ' -->
        <div class="jumbotron text-center py-3">
            <h1 class="display-3" v-text="fraseAdministrador"></h1>   <!-- llamar propiedad computada sin parentesis para que salgan los mensajes -->
        </div>
        
        <footer>
            <div class="container fixed-bottom">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <ul class="list-inline text-center">
                            <li class="list-inline-item"><span class="fa-stack fa-lg"><font-awesome-icon :icon="['fas','circle']" size="xs" /><font-awesome-icon :icon="['fab','twitter']" size="2x"/></span></li>
                            <li class="list-inline-item"><span class="fa-stack fa-lg"><font-awesome-icon :icon="['fas','circle']" size="xs" /><font-awesome-icon :icon="['fab','facebook']" size="2x"/></span></li>
                            <li class="list-inline-item"><span class="fa-stack fa-lg"><font-awesome-icon :icon="['fas','circle']" size="xs" /><font-awesome-icon :icon="['fab','github']" size="2x"/></span></li>
                        </ul>
                        <p class="text-muted copyright">Copyright © V8 - 2018</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'Administrador',
    props: {
    id: {
      type: String,
    }},
    computed: {
        fraseAdministrador(){
            if(this.$route.params.id == 'simple'){  /*params es el objeto que contiene la data que le estoy pasando a router-link*/
                return 'Bienvenido a la página de Administración' /*siempre poner return en las propiedades computadas*/
            }else if(this.$route.params.id == 'avanzado'){
                return 'Esta página de administración está en construcción. Intente como administrador simple'
            }else{
                return 'Esta página no existe. Ingrese la ruta simple o avanzado'
            }
        },  
    }
}
</script>