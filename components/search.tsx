import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Search() {
  return (
    <div className="flex w-full max-w-[650px] items-start">
      <Input type="email" placeholder="Search for your item" className='p-8 rounded-r-none focus:outline-none focus:border-transparent focus:border-blue-500'/>
      <Button type="submit" className='bg-blue-500 hover:bg-blue-600 p-8 rounded-l-none'>Search</Button>
    </div>
  )
}
