<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" name="tabs"
        class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
        <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-300">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <a v-for="tab in tabs" :key="tab.name" :href="tab.href"
            :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium']"
            :aria-current="tab.current ? 'page' : undefined">
            <Icon :name="tab.icon"
              :class="[tab.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500', '-ml-0.5 mr-2 h-5 w-5']"
              aria-hidden="true" />
            <span> {{ tab.name }} </span>
          </a>
        </nav>
      </div>
      <div class="grid grid-cols-2  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8">
        <div v-for="obj in speed" :key="obj.title"
          class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-5 py-5 shadow-md focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
          <div class="min-w-0 flex-1">
            <a href="#" class="focus:outline-none">
              <span class="absolute inset-0" />
              <p class="text-sm font-normal text-center">{{ obj.title }}</p>
              <p class="text-4xl text-center font-semibold p-2">
                <Icon :name="obj.icon" :class="['hover:text-gray-500', 'mr-1 h-15 w-15 font-light']" aria-hidden="true" />
                {{ obj.number }}
                <span class="text-sm font-medium">{{ obj.type }}</span>
              </p>
              <div class="flex items-center">
                <div class="relative flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="absolute top-0 left-0 bg-green-500 h-full rounded-full" style="width: 90%;"></div>
                </div>
                <span class="ml-2 text-sm text-gray-600">90%</span>
              </div>
            </a>
          </div>

        </div>
        <div v-for="obj in devices" :key="obj.title"
          class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-5 py-5 shadow-md focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
          <div class="min-w-0 flex-1">
            <a href="#" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true" />
              <p class="text-md font-normal text-center">{{ obj.title }}</p>
              <p class="text-4xl text-center font-semibold p-2">
                <Icon :name="obj.icon" :class="['hover:text-gray-500', 'mr-1 font-light']" aria-hidden="true" />
                {{ obj.number }}
                <span class="text-sm font-medium">{{ obj.type }}</span>
              </p>
              <p class="text-center text-sm">devices</p>
            </a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-8">
        <div class="container mx-auto px-4">
          <div class="rounded-lg overflow-hidden shadow-lg sm:flex sm:shadow-none bg-white">
            <div class="p-4 sm:w-2/3">
              <h2 class="text-2xl font-semibold">Historical Usage</h2>
              <p class="py-1 text-gray-500">Usage in the 3 Days, (America / New York)</p>
              <canvas ref="chartCanvas" class="w-full" ></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useChart from '@/components/chart.js'

const tabs = [
  { name: 'Overview', href: '#', current: true, icon: 'ri:list-check-3', },
  { name: 'Authorized Device', href: '#', current: false, icon: 'ri:barcode-fill' },
  { name: 'Connected Device', href: '#', current: false, icon: 'ri:list-check-3', },
]

const speed = [
  { title: 'Download Speed (Max 150 MBPs)', number: '132', type: "mbps", icon: 'mdi:arrow-up' },
  { title: 'Upload Speed (Max 150 MBPs)', number: '93', type: "mbps", icon: 'mdi:arrow-down' }
]

const devices = [
  { title: 'Total Connected Device', number: '2420', icon: 'material-symbols:computer-outline' },
  { title: 'Total Authorized Device', number: '1932', icon: 'material-symbols:computer' }
]

const chartCanvas = ref(null);
const chartData = {
  labels: ['Label 1', 'Label 2', 'Label 3'],
  data: [10, 20, 30],
};

onMounted(() => {
  useChart(chartData, chartCanvas);
});

</script>
