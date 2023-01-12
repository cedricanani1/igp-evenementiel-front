<template>
  <loading
    :active.sync="isLoading"
    :can-cancel="true"
    :is-full-page="FullPage"
  ></loading>
  <div class="page-title-area">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="title-content">
            <h2>Details Commandes</h2>
            <ul>
              <li>
                <router-link to="/">Accueil</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="title-img">
      <img src="/assets/images/page-title1.jpg" alt="About" />
      <img src="/assets/images/shape16.png" alt="Shape" />
      <img src="/assets/images/shape17.png" alt="Shape" />
      <img src="/assets/images/shape18.png" alt="Shape" />
    </div>
  </div>

  <div
    class="card mx-auto px-3 pb-1"
    style="max-width: 540px"
    v-if="detailsCommandes.cart"
  >
    <h3 class="text-center" v-if="detailsCommandes.order_number">
      <b>Commande</b> n <sup>o</sup>{{ detailsCommandes.order_number }}
    </h3>
    <p class="text-center" v-if="detailsCommandes.created_at">
      Commander le :
      {{ new Date(detailsCommandes.created_at).toLocaleDateString("fr") }}
    </p>
    <hr />
    <div class="row g-0">
      <div
        class="col-md-12"
        v-for="item in detailsCommandes.cart"
        :key="item.id"
      >
        <h5 class="mb-2" v-if="item.product.libelle">
          {{ item.product.libelle }}
        </h5>

        <img
          :src="
            'https://logistique-backend.igp-ci.com/public/' +
            item.product.photo[0].path
          "
          class="img-fluid rounded-start"
          alt=""
        />
        <p class="mt-2" v-if="item.quantity">Quantite : {{ item.quantity }}</p>
        <p>
          Pour le : {{ new Date(item.from).toLocaleDateString("fr") }} au :
          {{ new Date(item.to).toLocaleDateString("fr") }}
        </p>
      </div>
      <div class="col-md-12">
        <div class="card-body p-0">
          <p class="card-title" v-if="detailsCommandes.status">
            status:{{
              detailsCommandes.status === "delivered"
                ? "delivrer"
                : "pas deliver"
            }}
          </p>
          <p v-if="detailsCommandes.total_amount">
            <strong>{{ detailsCommandes.total_amount }} Fcfa</strong>
          </p>
          <p class="card-text" v-if="detailsCommandes.payment_status">
            status de paiement:
            <strong>
              {{
                detailsCommandes.payment_status === "unpaid"
                  ? "non payé"
                  : "payé"
              }}</strong
            >
          </p>
          <div class="printDoc" v-if="showDocForPrint" @click="showDoc">
            <div class="viewFichierPrint" id="printjs_doc">
              <img class="w-25 img-fluid" src="../assets/igp.jpeg" alt="igp">
              <div class="info_client">
                <p><strong>abidjan le</strong> {{ new Date(detailsCommandes.created_at).toLocaleDateString("fr") }}</p>
                <div class="client">
                  <p class="border-bottom text-center"><strong>client : </strong>{{detailsCommandes.nom}} {{detailsCommandes.prenoms}}</p>
                  <p class="m-2"><strong>Raison social</strong> : {{detailsCommandes.raison_social}}</p>
                  <p class="m-2"><strong>Adresse </strong> :</p>
                </div>
              </div>
              <div class="ref">
                <p><strong>nos ref</strong>: {{detailsCommandes.order_number}}</p>
                <p><strong>Objet</strong>: {{objet.toString()}}</p> 
                <p><strong>Action</strong>: </p>
                <p><strong>Periode</strong>: </p>
                <p><strong>Duree</strong>: {{this.defineTotalHour(days)}} jour(s)</p>
              </div>
              <div class="tabl" >
                <table class="table table-bordered ">
                  <thead>
                    <tr>
                      <th scope="col">Designation</th>
                      <th scope="col">Quantite</th>
                      <th scope="col">Pu</th>
                      <th scope="col">Ocurrence/En Nbrs jour</th>
                      <th scope="col">Montant en Fcfa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in detailsCommandes.cart"
        :key="item.id">
                    <th scope="row">{{item.product.libelle}}</th>
                    <td>{{ item.quantity }}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.days}}</td>
                    <td>{{moneyFormat.format(item.quantity * item.price * item.days)}} Fcfa</td>
                    </tr>
                    <tr>
                    <td colspan="4" class="text-start"><strong>TOTAL Rubrique</strong> </td>
                    <td>{{totalRubrique}} </td>
                    </tr>
                    <tr>
                    <td colspan="4" class="text-start"> <strong>Frais de gestion(17%)</strong> </td>
                    <td>{{moneyFormat.format(percent)}} Fcfa </td>
                    </tr>
                    <tr>
                    <td colspan="4" class="text-start"> <strong>Montant total HT</strong> </td>
                    <td>{{moneyFormat.format(getTotal)}} Fcfa </td>
                    </tr>
                    <tr>
                    <td colspan="4" class="text-start"> <strong>Montant TVA (18%)</strong> </td>
                    <td>{{moneyFormat.format(tva)}} Fcfa </td>
                    </tr>
                    <tr>
                    <td colspan="4" class="text-start"> <strong>TOTAL TTC A PAYER</strong> </td>
                    <td>{{moneyFormat.format(TTC)}} Fcfa </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br>
              <br>
              <br>
               <p><strong>Arrêtée la présente FACTURE à la somme de :</strong><span class="letter">{{letter}}</span></p>
              <p class="text-center">
                IVOIRE GOODIES PERFORMANCES SARL
                <br />BOITE POSTALE: 08 BP 3188 ABIDJAN 08 -TEL: 22499504 /
                20011012 RCCM N°: CI-ABJ-2016-B-17900 - CC N°: 1634917 M
              </p>
            </div>
            <button class="btn btn-primary" @click="printDocu">Imprimer</button>
          </div>
          <button class="btn btn-primary" @click="showDoc">Voir la facture</button>
          <router-link to="/commande" class="btn btn-primary float-end w-25"
            >Retour</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../components/axios.js";
import printJS from "print-js";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
const { NumberToLetter } = require("convertir-nombre-lettre");
export default {
  name: "DetailsCommandes",
  components: {
    Loading
  },
  data () {
    return {
      detailsCommandes: {},
      isLoading: false,
      showDocForPrint: false,
      prixTotal: [],
      moneyFormat: new Intl.NumberFormat("de-DE"),
      totalRubrique : [],
      objet:[],
      days:[],
      Mytotal:'',
      getTotal:'',
      percent:'',
      TTC:'',
      tva:'',
      letter:''
    };
  },
  methods: {
    defineTotalHour (hour) {
  if(hour.length > 0){
   return hour.reduce((a,b)=>a+b);
  }
},
 getDetails () {
      this.isLoading = true
      axios
        .get(
          "https://logistique-backend.igp-ci.com/api/orders/" +
            this.$route.params.id
        )
        .then((rep) => {
            console.log("rep",rep.data)
          this.detailsCommandes = rep.data
           const qtyTotal = []
           const totalRubrique = [] 
           const object = []
           const days = []
          rep.data.cart.forEach((element) => {
            if (element) {
            let total = (element.price * element.quantity)
             qtyTotal.push(total)   
             totalRubrique.push(element.quantity) 
             object.push(element.objects) 
             days.push(element.days)       }
          })
          this.prixTotal = qtyTotal
          this.totalRubrique = totalRubrique.length
          this.objet = object
          this.days = days
          this.getTotal = this.prixTotal.reduce((a,b) => a+b)
          this.percent = (this.getTotal*17)/100 
          this.tva =  (this.getTotal*18)/100  
          this.TTC = this.getTotal + this.tva + this.percent 
          this.letter = NumberToLetter(this.TTC) 
          console.log("Object", this.percent)
          console.log("Tva", this.tva)
          console.log("TTC", NumberToLetter(this.TTC))
          console.log("days",this.days)
          console.log("Rubrique",this.totalRubrique)
          this.isLoading = false
        })
    },
    printDocu () {
      const style = `@media print { 
      
.printDoc {
  position: fixed !important;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex !important;
  justify-content: center;
  place-items: center;
  background: rgba(141, 137, 137, 0.429);
  z-index: 999;
}
.letter{
  color:red;
  text-transform:uppercase;
}
.text-start{
  text-align: left;
}
.client .m-2{
  margin:0 1em;
}
    .viewFichierPrint {
            width: 80%;
  background: white;
  height: 98%;
  border-radius: 10px;
  position: relative;
   padding:2em;
}
  .viewFichierPrint .info_client{
    position:absolute;
    right:2em;
} 
table{
    text-align: center;
    margin-top:3em;
    border:1px solid black;
    border-top:0;
    border-right:0;

}
td,th{
    border:1px solid black;
    border-bottom:0;
    border-left:0;
    
}
.ref{
    margin-top:8em
}
.border-bottom{
    border-bottom:1px solid black;
    text-align: center;
}
.client{
 border:1px solid black;
 padding:1em 0;
}
.m-0{
    margin:0;
}
.text-center{
    text-align: center;
}
        } `
      printJS({
        printable: "printjs_doc",
        type: "html",
        style: style,
      });
    },
    showDoc () {
  this.showDocForPrint = ! this.showDocForPrint
    }
  },
  mounted() {
    this.getDetails();
  },
};
</script>

<style scoped>
.printDoc {
  position: fixed !important;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex !important;
  justify-content: center;
  place-items: center;
  background: rgba(141, 137, 137, 0.429);
  z-index: 999;
}
.viewFichierPrint {
  width: 80%;
  background: white;
  height: 98%;
  overflow-y: auto;
  border-radius: 10px;
  position: relative;
   padding:2em;
}
.viewFichierPrint .info_client {
  position: absolute;
  right:2em;
}
.letter{
  color:red;
  text-transform:uppercase;
}
.client{
 border:1px solid black;
}
table{
    text-align: center;
}
.ref{
    margin-top:10em
}
</style>
