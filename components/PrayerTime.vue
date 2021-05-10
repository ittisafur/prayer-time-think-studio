<template>
    <div>
        <div class="prayer-time"> 
            <div class="container">
                <div class="row">
                    <div class="col-md-2">
                       Fajr {{times.Fajr}}
                    </div>
                    <div class="col-md-2">
                        Sun Rise {{times.Sunrise}}
                    </div>
                    <div class="col-md-2">
                        Dhuhr {{times.Dhuhr}}
                    </div>
                    <div class="col-md-2">
                        Asr {{times.Asr}}
                    </div>
                    <div class="col-md-2">
                        Maghrib {{times.Maghrib}}
                    </div>
                    <div class="col-md-2">
                        Isha {{times.Isha}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        times: Object,
    }
}
</script>

<style>

</style>
