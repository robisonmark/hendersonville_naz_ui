<script setup lang="ts">
import FullHero from "../components/heros/FullWidthHero.vue";
import ContentLeft from "../components/blocks/ContentLeft.vue";
import FullWidthFeature from "@/components/blocks/fullWidthFeature/FullWidthFeature.vue";
import CardRow from "@/components/blocks/CardRow.vue";

const cards = [
{
    component: "CircleImageStacked",
    data: {
      container: 'staff',
      name: 'Duane Harris',
      role: 'Lead Pastor',
      picture: {
        url: '',
      },
      id: 0
    }
  },
  {
    component: "CircleImageStacked",
    data: {
      container: 'staff',
      name: 'Jacob Lagesse',
      role: 'Worship Leader',
      picture: {
        url: '',
      },
      id: 1
    }
  },
  {
    component: "CircleImageStacked",
    data: {
      container: 'staff',
      name: 'Nick Groover',
      role: 'Youth Pastor',
      picture: {
        url: '',
      },
      id: 2
    }
  },
  {
    component: "CircleImageStacked",
    data: {
      container: 'staff',
      name: 'Pam Gerdes',
      role: 'Children\'s Director',
      picture: {
        url: '',
      },
      id: 3
    }
  },
  {
    component: "CircleImageStacked",
    data: {
      container: 'staff',
      name: 'Randy Kinder',
      role: 'Media & Communications Pastor',
      picture: {
        url: '',
      },
      id: 4
    }
  },
  {
    component: "CircleImageStacked",
    data: {
      container: 'staff',
      name: 'Brandon Brown',
      role: 'Discipleship Pastor',
      picture: {
        url: '',
      },
      id: 5
    }
  },
  {
    component: "CircleImageStacked",
    data: {
      container: 'staff',
      name: 'Mark Robison',
      role: 'Community Life Pastor',
      picture: {
        url: '',
      },
      id: 6
    }
  },
  {
    component: "CircleImageStacked",
    data: {
      container: 'staff',
      name: 'Terry Hedges',
      role: 'Evangelism Pastor',
      picture: {
        url: '',
      },
      id: 7
    }
  },
  {
    component: "CircleImageStacked",
    data: {
      container: 'staff',
      name: 'Janet Spann',
      role: 'Financial Manager',
      picture: {
        url: '',
      },
      id: 8
    }
  },
  {
    component: "CircleImageStacked",
    data: {
      container: 'staff',
      name: 'Christi Brown',
      role: 'Office Administrator',
      picture: {
        url: '',
      },
      id: 9
    }
  },
];

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

<template>
  <full-hero></full-hero>
  <content-left></content-left>
  <full-width-feature></full-width-feature>
  <div class="container">
    <h4>Get To Know<span class="line-two">Our Staff</span></h4>
    <card-row :cards="cards"></card-row>
  </div>
  <!-- <card-row :cards="tiles"></card-row> -->
</template>
