import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog"
import { IconX } from "@tabler/icons-react"

export function ViewDialog({ openView, setOpenView }: { openView: { data: any, isOpen: boolean }, setOpenView: (open: { data?: any, isOpen: boolean }) => void }) {
    return (
        <AlertDialog open={openView.isOpen} onOpenChange={() => setOpenView({ isOpen: !openView.isOpen })}>
            <AlertDialogContent blurIntensity="sm">
                <AlertDialogHeader>
                    <AlertDialogTitle>Proficiency Detail</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will permanently delete this data and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel><IconX />Close</AlertDialogCancel>
                    {/* <AlertDialogAction className="bg-red-400 dark:text-white"><IconTrash />Delete</AlertDialogAction> */}
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
