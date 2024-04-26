"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { useTranslations } from "next-intl"
import { LanguagePicker } from "./languageSwitcher"



export default function Menu() {
  const t = useTranslations("menu")

  const menuItem = [
    {
      title: t("allBooks"),
      href: "/",
      key: 1
       },
    {
      title: t("addBook"),
      href: "/add-book",
      key: 2
       }
    
  ]
  return (
    <NavigationMenu className="mx-auto mt-5 ">
      <NavigationMenuList>
        
       {menuItem?.map((item)=>{ return(


        <NavigationMenuItem key={item.key} className="border rounded">
          <Link href={item.href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             {item.title}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
       )


       })}

       <LanguagePicker/>
      </NavigationMenuList>
    </NavigationMenu>
  )
}


