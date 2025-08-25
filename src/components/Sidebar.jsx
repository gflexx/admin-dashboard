import React from 'react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import { Sheet, PackageSearch, CircleUser, LayoutDashboard, LogOut, Newspaper, CalendarSync } from 'lucide-react'
import Link from 'next/link'

function Sidebar() {
    return (
        <Command className='bg-secondary rounded-none'>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList className='space-y-2'>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions" className='space-y-2'>
                    <CommandItem>
                        <Sheet className='mr-2' />
                        <Link href='stock'>Stock</Link>
                    </CommandItem>
                    <CommandItem>
                        <PackageSearch className='mr-2' />
                        <Link href='products'>Products</Link>
                    </CommandItem>
                    <CommandItem>
                        <Newspaper className='mr-2' />
                        <Link href='posts'>Posts</Link>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Account " className='space-y-2'>
                    <CommandItem>
                        <CircleUser className='mr-2' />
                        <Link href='account'>Profile</Link>
                    </CommandItem>
                    <CommandItem>
                        <LayoutDashboard className='mr-2' />
                        <Link href='/'>Dashboard</Link>
                    </CommandItem>
                    <CommandItem>
                        <CalendarSync className='mr-2' />
                        <Link href='subscription'>Subscriptions</Link>
                    </CommandItem>
                    <CommandItem>
                        <LogOut className='mr-2' />
                        <Link href='auth'>Logout</Link>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    )
}

export default Sidebar