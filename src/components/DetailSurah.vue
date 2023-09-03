<template>
  <div class="mt-3">
    <div class="container-fluid row">
      <div class="card-custom">
        <div class="card-body text-center">
          <p class="surah-name arabic fw-bolder fs-1">
            {{data_surat.nama}}
          </p>
          <p>
            Surah {{data_surat.namaLatin}} ({{ data_surat.arti }}) |
            {{data_surat.tempatTurun}} | {{data_surat.jumlahAyat}} Ayat
          </p>
        </div>
        <div 
        class="row card-body border rounded py-2 mb-3">
          <div class="col-3">
            <button class="btn btn-light">
             Surah Sebelumnya
            </button>
          </div>
          <div class="col-6 text-center">
            <font-awesome-icon :icon="['fas', 'circle-info']" />
            Detail Surah
          </div>
          <div class="col-3 text-end">
            <button class="btn btn-light">
             Surah Berikutnya
            </button>
          </div>
        </div>
      </div>
      <div class="card mt-2" v-for="detail in data_surat.ayat">
        <div class="card-body ">
          <p class="text-end fs-4 arabic">
            {{detail.teksArab}}
          </p>
          <small class="text-start text-latin fst-italic">
            {{detail.teksLatin}}
          </small>
          <br>
          <small class="text-start">
            {{detail.teksIndonesia}}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  props: ['data_surat'],
  data() {
    return {
      isModalOpen: false,
      audioUrl: ''
    }
  },
}
</script>


