import { ShieldAlertIcon } from "lucide-react";
import {
    Item,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle
} from "@/components/ui/item"

export const UnauthenticatedView =() =>{
    return (
        <div className="flex w-full items-center justify-center bg-background">
            <div className="w-full max-w-lg bg-muted/40 rounded-lg">
                <Item variant="outline">
                    <ItemMedia variant="icon">
                        <ShieldAlertIcon/>
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Unauthorized Access</ItemTitle>
                        <ItemDescription>
                            You are not authorized to access this resource.
                        </ItemDescription>
                    </ItemContent>
                </Item>

            </div>

        </div>
    )
}
