<template>
  <li class="" :class="level === 0 ? 'nav-item dropdown' : itemClass">
    <a
      :class="[
        menuItemActive(item.key) && 'active',
        level != 0 && 'py-2 dropdown-item',
        level == 0 && 'nav-link'
      ]"
      class="dropdown-toggle arrow-none d-flex align-items-center justify-content-between gap-2"
      href="#"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {{ item.label }}
      <font-awesome-icon v-if="level === 0" :icon="faChevronDown" size="xs" />
      <font-awesome-icon v-else :icon="faEllipsis" class="float-end" />
    </a>

    <ul class="dropdown-menu" :aria-labelledby="item.key">
      <template v-for="child in item.children" :key="child.key">
        <MenuItemWithChildren
          v-if="child.children"
          :item="child"
          :level="level + 1"
          item-class="dropdown-submenu dropend"
          link-class="dropdown-item dropdown-toggle arrow-none d-flex align-items-center justify-content-between"
        />

        <MenuItem v-else :item="child" link-class="py-2" />
      </template>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { faChevronDown, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import type { MenuItemType } from '@/types/layout'
import MenuItem from '@/components/navbar/MenuItem.vue'
import router from '@/router'
import { ref } from 'vue'
import { APP_MENU_ITEMS } from '@/assets/data/menu-items'
import type { RouteRecordName } from 'vue-router'

type SubMenus = {
  item: MenuItemType
  itemClass?: string
  linkClass?: string
  level: number
}

defineProps<SubMenus>()

const currentRouteName = router.currentRoute.value.name

const activeMenuItems = ref<object>({})

const menuItemActive = (key: string) => {
  activeMenuItems.value = getMatchingMenuItems(APP_MENU_ITEMS, currentRouteName)
  return activeMenuItems.value && Object.values(activeMenuItems.value).includes(key)
}

const getMatchingMenuItems = (
  data: MenuItemType[],
  currentRouteName: RouteRecordName | null | undefined
) => {
  let matchingItems: string[] = []

  const traverse = (item: MenuItemType) => {
    if (
      item.children &&
      item.children.some((child) => child.link && child.link.name === currentRouteName)
    ) {
      matchingItems.push(item.key) // Add parent's key if a child matches
      if (item.parentKey) {
        matchingItems.push(item.parentKey)
      }
    }

    if (item.children) {
      item.children.forEach((child) => traverse(child))
    }
  }

  data.forEach(traverse)

  return matchingItems
}
</script>
