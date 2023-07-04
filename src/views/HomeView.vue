<template>
  <full-hero></full-hero>
  <content-left></content-left>
  <full-width-feature></full-width-feature>
  
  <card-row :cards="cards" :rowTitle="rowTitle" :cards-per-row="4"></card-row>
  <!-- <card-row :cards="tiles"></card-row> -->
</template>

<script setup lang="ts">
  import { onMounted } from "vue";
  
  import { getPage } from "@/services/robros";
  
  import FullHero from "../components/heros/FullWidthHero.vue";
  import ContentLeft from "../components/blocks/ContentLeft.vue";
  import FullWidthFeature from "@/components/blocks/fullWidthFeature/FullWidthFeature.vue";
  import CardRow from "@/components/blocks/CardRow.vue";

  const rowTitle = "Get To Know<span class='line-two'>Our Staff</span>"
  const cards = [
  {
    data: {
        component: "CircleImageStacked",
        container: 'staff',
        tileContent: {
          headline: 'Duane Harris',
          description: 'Lead Pastor',
        },
        tileImage: {
          url: '',
        },
        tileButton: {
          url: 'mailto: duane@hendersonvillenaz.org',
          cta: 'Contact Pastor Duane'
        },
        id: 0
      }
    },
    {
      data: {
        component: "CircleImageStacked",
        container: 'staff',
        tileContent: {
          headline: 'Jacob Lagesse',
          description: 'Worship Leader',
        },
        tileImage: {
          url: '',
        },
        tileButton: {
          url: 'mailto: jacob@hendersonvillenaz.org',
          cta: 'Contact Jacob'
        },
        id: 1
      }
    },
    {
      data: {
        component: "CircleImageStacked",
        container: 'staff',
        tileContent: {
          headline: 'Nick Groover',
          description: 'Youth Pastor',
        },
        tileImage: {
          url: '',
        },
        tileButton: {
          url: 'mailto: nick@hendersonvillenaz.org',
          cta: 'Contact Pastor Nick'
        },
        id: 2
      }
    },
    {
      data: {
        component: "CircleImageStacked",
        container: 'staff',
        tileContent: {
          headline: 'Morgan Aubrey',
          description: 'Interim Children\'s Director',
        },
        tileImage: {
          url: '',
        },
        tileButton: {
          url: 'mailto: morgan@hendersonvillenaz.org',
          cta: 'Contact Pam'
        },
        id: 3
      }
    },
    {
      data: {
        component: "CircleImageStacked",
        container: 'staff',
        tileContent: {
          headline: 'Randy Kinder',
          description: 'Media & Communications Pastor',
        },
        tileImage: {
          url: '',
        },
        tileButton: {
          url: 'mailto: randy@hendersonvillenaz.org',
          cta: 'Contact Pastor Randy'
        },
        id: 4
      }
    },
    {
      data: {
        component: "CircleImageStacked",
        container: 'staff',
        tileContent: {
          headline: 'Brandon Brown',
          description: 'Discipleship Pastor',
        },
        tileImage: {
          url: '',
        },
        tileButton: {
          url: 'mailto: brandon@hendersonvillenaz.org',
          cta: 'Contact Pastor Brandon'
        },
        id: 5
      }
    },
    {
      data: {
        component: "CircleImageStacked",
        container: 'staff',
        tileContent: {
          headline: 'Mark Robison',
          description: 'Community Life Pastor',
        },
        tileImage: {
          url: '',
        },
        tileButton: {
          url: 'mailto: mark@hendersonvillenaz.org',
          cta: 'Contact Pastor Mark'
        },
        id: 6
      }
    },
    {
      data: {
        component: "CircleImageStacked",
        container: 'staff',
        tileContent: {
          headline: 'Terry Hedges',
          description: 'Evangelism Pastor',
        },
        tileImage: {
          url: '',
        },
        tileButton: {
          url: 'mailto: terry@hendersonvillenaz.org',
          cta: 'Contact Pastor Terry'
        },
        id: 7
      }
    },
    {
      data: {
        component: "CircleImageStacked",
        container: 'staff',
        tileContent: {
          headline: 'Janet Spann',
          description: 'Financial Manager',
        },
        tileImage: {
          url: '',
        },
        tileButton: {
          url: 'mailto: janet@hendersonvillenaz.org',
          cta: 'Contact Janet'
        },
        id: 8
      }
    },
    {
      data: {
        component: "CircleImageStacked",
        container: 'staff',
        tileContent: {
          headline: 'Christi Brown',
          description: 'Office Administrator',
        },
        tileImage: {
          url: '',
        },
        tileButton: {
          url: 'mailto: christi@hendersonvillenaz.org',
          cta: 'Contact Christi'
        },
        id: 9
      }
    },
  ];

  onMounted(() => {
    getPage('')
  })

// const tiles = [
//   {
//     component: "FullImageTile",
//   },
//   {
//     component: "FullImageTile",
//   },
//   {
//     component: "FullImageTile",
//   },
// ];
</script>
