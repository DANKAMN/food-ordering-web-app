import { DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenu, DropdownMenuItem } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

type Props = {
    onChange: (value: string) => void;
    sortOption: string;
}

const SORT_OPTIONS = [
    {
        label: "Best match",
        value: "BestMath"
    },
    {
        label: "Delivery price",
        value: "deliveryPrice"
    },
    {
        label: "Estimated delivery time",
        value: "estimatedDeliveryTime"
    }
]

const SortOptionDropDown = ({ onChange, sortOption }: Props) => {
    const selectedSearchLabel = SORT_OPTIONS.find((option) => option.value === sortOption)?.label || SORT_OPTIONS[0].label

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
                <Button variant="outline" className="w-full">
                    Sort by: {selectedSearchLabel}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {SORT_OPTIONS.map((option) => (
                    <DropdownMenuItem className="cursor-pointer" onClick={() => onChange(option.value)}>
                        {option.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default SortOptionDropDown