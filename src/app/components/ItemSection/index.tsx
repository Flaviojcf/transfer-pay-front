import { ISectionItem } from '@/app/interfaces/ISectionItem'

export function ItemSection({ description, image, title }: ISectionItem) {
  return (
    <div
      className="flex flex-col items-start space-y-4 w-72
    lg:w-72 
    "
    >
      <div className="w-10 h-10 pl-4">{image}</div>
      <div className="flex items-center border-l-[3px] border-emerald-700 p-4 h-9 font-bold text-base">
        {title}
      </div>
      <div className="text-lg w-full h-36">{description}</div>
    </div>
  )
}
