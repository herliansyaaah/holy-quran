<template>
  <DetailSurah 
  v-show="is_surah_detail" 
  :data_surat="detail_surah"/>
  <div class="mt-3" v-show="!is_surah_detail">
    <div class="container text-center w-75">
      <input type="text" class="form-control" placeholder="Search surah...">
    </div>
    <div class="mt-3 container-fluid">
      <div class="row align-items-start" >
        <div class="col-md-4" v-for="surah in all_surah">
          <div class="card mb-2" @click="detailSurat(surah.nomor)">
            <div class="card-body">
              <div class="row">
                <div class="col-2 fw-bold text-left">
                    {{surah.nomor}}
                </div>
                <div class="col-7">
                  <small class="text-surah fw-bold fs-6">
                    {{surah.namaLatin}}</small><br>
                  <small class="text-arti">
                    {{surah.arti}}</small>
                </div>
                <div class="col-3 text-end">
                  <small class="text-surah arabic fs-5 fw-bold">
                   {{surah.nama}}</small><br>
                  <small class="card-text">
                   {{surah.jumlahAyat}} Ayat</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DetailSurah from './DetailSurah.vue'
  export default {
    components:{
      DetailSurah
    },
    data() {
      return {
        all_surah: [],
        detail_surah: [],
        is_surah_detail: false
      }
    },
    mounted() {
      this.getAllSurat()
    },
    methods: {
      getAllSurat(){
        this.$http.get('https://equran.id/api/v2/surat')
        .then(ress => {
          this.all_surah = ress.data.data
          this.is_surah_detail = false
          console.log(ress)
        })
      },
      detailSurat(data){
        this.$http.get(`https://equran.id/api/v2/surat/${data}`)
        .then(ress =>{
          this.detail_surah = ress.data.data
          this.is_surah_detail = true
          console.log(ress)
        })
      }
    },
  }
</script>
