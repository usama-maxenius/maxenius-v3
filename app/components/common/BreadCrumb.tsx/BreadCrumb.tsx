import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { theme } from "@config/theme"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Breadcrumbs({
  items = [],
}: {
  items: { label: string; href: string; active?: boolean }[]
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={item.href}
                  className={`${theme.typography.paragraph.p4} ${theme.colors.brand.accent} font-medium leading-[35px] ${
                    item.active ? "opacity-[60%]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {/* Separator between items */}
            {index < items.length - 1 && (
              <BreadcrumbSeparator
                className={`flex items-center justify-center ${theme.colors.brand.accent}  !w-8 !h-16 
                [&>svg]:!w-8 [&>svg]:!h-16`}
              >
                <ChevronLeft />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
