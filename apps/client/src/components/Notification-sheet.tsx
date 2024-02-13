import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { Button } from './ui/button'
import { FaRegBell } from "react-icons/fa6";
import { useTheme } from 'next-themes'
import { ScrollArea } from './ui/scroll-area'

export function NotificationSheet() {

  const notifications = [
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: true
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification de 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: true
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: true
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: false
    },
    {
      header: "notification de 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error veritatis, fugiat sequi voluptate, numquam explicabo quidem delectus corrupti quod sed inventore odit hic consectetur praesentium enim. Itaque, eius dolorem.",
      read: true
    },
  ]

  // const notifications = []

  const { theme } = useTheme()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className='dark:border-cover border-[#acacac] px-2'>
          <FaRegBell color={theme === "light" ? "#000" : "hsl(var(--primary))"} size={18}/>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notificaciones</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col items-center justify-start mt-7 h-[800px] px-3 py-2 rounded-md">
          {
            notifications.map((item) => (
              <div className="flex flex-row flex-nowrap overflow-hidden max-h-32 max-w-80 text-ellipsis items-start justify-between gap-8 bg-cover rounded-md py-2 px-3 mb-3">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row flex-nowrap w-full justify-between">
                    <span className='text-sky-600 capitalize'>{item.header}</span>
                    {!item.read ? <div className='bg-primary rounded-full p-1 h-1'></div> : <div className='bg-muted-foreground rounded-full p-1 h-1'></div>}
                  </div>
                  <span className='text-sm text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis w-72'>{item.description}</span>
                </div>
              </div>
            ))
          }
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
