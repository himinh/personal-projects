<template>
    <DocSectionText v-bind="$attrs">
        <p>Size of an icon is controlled with the font-size property of the element.</p>
    </DocSectionText>
    <div class="card flex justify-content-center align-items-center gap-3">
        <i class="pi pi-check" style="font-size: 1rem"></i>
        <i class="pi pi-times" style="font-size: 1.5rem"></i>
        <i class="pi pi-search" style="font-size: 2rem"></i>
        <i class="pi pi-user" style="font-size: 2.5rem"></i>
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<i class="pi pi-check" style="font-size: 1rem"></i>
<i class="pi pi-times" style="font-size: 1.5rem"></i>
<i class="pi pi-search" style="font-size: 2rem"></i>
<i class="pi pi-user" style="font-size: 2.5rem"></i>
`
            }
        };
    }
};
</script>
