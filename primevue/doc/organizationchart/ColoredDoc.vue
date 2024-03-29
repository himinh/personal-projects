<template>
    <DocSectionText v-bind="$attrs">
        <p>Styling a specific node is configured with <i>styleClass</i> and <i>style</i> options of a TreeNode.</p>
    </DocSectionText>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #person="slotProps">
                <div class="flex flex-column">
                    <div class="flex flex-column align-items-center">
                        <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-3 w-3rem h-3rem" />
                        <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                        <span>{{ slotProps.node.data.title }}</span>
                    </div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            data: {
                key: '0',
                type: 'person',
                styleClass: 'bg-indigo-500 text-white border-round-xl',
                data: {
                    image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
                    name: 'Amy Elsner',
                    title: 'CEO'
                },
                children: [
                    {
                        key: '0_0',
                        type: 'person',
                        styleClass: 'bg-purple-500 text-white border-round-xl',
                        data: {
                            image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
                            name: 'Anna Fali',
                            title: 'CMO'
                        },
                        children: [
                            {
                                label: 'Sales',
                                styleClass: 'bg-purple-500 text-white border-round-xl'
                            },
                            {
                                label: 'Marketing',
                                styleClass: 'bg-purple-500 text-white border-round-xl'
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        type: 'person',
                        styleClass: 'bg-teal-500 text-white border-round-xl',
                        data: {
                            image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
                            name: 'Stephen Shaw',
                            title: 'CTO'
                        },
                        children: [
                            {
                                label: 'Development',
                                styleClass: 'bg-teal-500 text-white border-round-xl'
                            },
                            {
                                label: 'UI/UX Design',
                                styleClass: 'bg-teal-500 text-white border-round-xl'
                            }
                        ]
                    }
                ]
            },
            code: {
                basic: `
<OrganizationChart :value="data" collapsible>
    <template #person="slotProps">
        <div class="flex flex-column">
            <div class="flex flex-column align-items-center">
                <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-3 w-3rem h-3rem" />
                <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                <span>{{ slotProps.node.data.title }}</span>
            </div>
        </div>
    </template>
    <template #default="slotProps">
        <span>{{ slotProps.node.label }}</span>
    </template>
</OrganizationChart>
`,
                options: `
<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #person="slotProps">
                <div class="flex flex-column">
                    <div class="flex flex-column align-items-center">
                        <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-3 w-3rem h-3rem" />
                        <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                        <span>{{ slotProps.node.data.title }}</span>
                    </div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                key: '0',
                type: 'person',
                styleClass: 'bg-indigo-500 text-white border-round-xl',
                data: {
                    image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
                    name: 'Amy Elsner',
                    title: 'CEO'
                },
                children: [
                    {
                        key: '0_0',
                        type: 'person',
                        styleClass: 'bg-purple-500 text-white border-round-xl',
                        data: {
                            image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
                            name: 'Anna Fali',
                            title: 'CMO'
                        },
                        children: [
                            {
                                label: 'Sales',
                                styleClass: 'bg-purple-500 text-white border-round-xl'
                            },
                            {
                                label: 'Marketing',
                                styleClass: 'bg-purple-500 text-white border-round-xl'
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        type: 'person',
                        styleClass: 'bg-teal-500 text-white border-round-xl',
                        data: {
                            image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
                            name: 'Stephen Shaw',
                            title: 'CTO'
                        },
                        children: [
                            {
                                label: 'Development',
                                styleClass: 'bg-teal-500 text-white border-round-xl'
                            },
                            {
                                label: 'UI/UX Design',
                                styleClass: 'bg-teal-500 text-white border-round-xl'
                            }
                        ]
                    }
                ]
            }
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #person="slotProps">
                <div class="flex flex-column">
                    <div class="flex flex-column align-items-center">
                        <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-3 w-3rem h-3rem" />
                        <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                        <span>{{ slotProps.node.data.title }}</span>
                    </div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    key: '0',
    type: 'person',
    styleClass: 'bg-indigo-500 text-white border-round-xl',
    data: {
        image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
        name: 'Amy Elsner',
        title: 'CEO'
    },
    children: [
        {
            key: '0_0',
            type: 'person',
            styleClass: 'bg-purple-500 text-white border-round-xl',
            data: {
                image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'CMO'
            },
            children: [
                {
                    label: 'Sales',
                    styleClass: 'bg-purple-500 text-white border-round-xl'
                },
                {
                    label: 'Marketing',
                    styleClass: 'bg-purple-500 text-white border-round-xl'
                }
            ]
        },
        {
            key: '0_1',
            type: 'person',
            styleClass: 'bg-teal-500 text-white border-round-xl',
            data: {
                image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
                name: 'Stephen Shaw',
                title: 'CTO'
            },
            children: [
                {
                    label: 'Development',
                    styleClass: 'bg-teal-500 text-white border-round-xl'
                },
                {
                    label: 'UI/UX Design',
                    styleClass: 'bg-teal-500 text-white border-round-xl'
                }
            ]
        }
    ]
});
<\/script>
`
            }
        };
    }
};
</script>
