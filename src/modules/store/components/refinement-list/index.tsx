import { StoreGetProductsParams } from "@medusajs/medusa"
import { useCollections } from "medusa-react"
import { ChangeEvent } from "react"

type RefinementListProps = {
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
}
const RefinementList = ({
  refinementList,
  setRefinementList,
}: RefinementListProps) => {
  const { collections, isLoading } = useCollections()

  const handleCollectionChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { checked } = e.target

    const collectionIds = refinementList.collection_id || []

    const exists = collectionIds.includes(id)

    if (checked && !exists) {
      setRefinementList({
        ...refinementList,
        collection_id: [...collectionIds, id],
      })

      return
    }

    if (!checked && exists) {
      setRefinementList({
        ...refinementList,
        collection_id: collectionIds.filter((c) => c !== id),
      })

      return
    }

    return
  }

  return (
    <div className="h-[46px] w-100% flex flex-row items-center justify-between whitespace-nowrap overflow-auto no-scrollbar">
      <div className="px-8 small:pr-0 small:pl-8 small:min-w-[250px]">
        <div className="flex gap-x-3 small:flex-col small:gap-y-3">
          <ul className="text-base-regular flex items-center gap-x-4 small:grid small:grid-cols-1 small:gap-y-2">
            {collections?.map((c) => (
              <li key={c.id} className="items-center mx-2">
                 <label 
                  className={`flex items-center justify-center w-[130%] h-[33px] rounded-full text-center ${refinementList.collection_id?.includes(c.id) ? 'bg-[#000] text-white' :  'bg-zinc-100 text-light'}`}
                >
                  <input
                    type="checkbox"
                    defaultChecked={refinementList.collection_id?.includes(
                      c.id
                    )}
                    onChange={(e) => handleCollectionChange(e, c.id)}
                    className="accent-[#000] mx-1 hidden"
                  />
                  {c.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RefinementList
