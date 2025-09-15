import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog"
import { IconTrash, IconX } from "@tabler/icons-react"

export function DeleteDialog({ openDelete, setOpenDelete, onDeleteData, deleteData }: any) {
    return (
        <AlertDialog open={openDelete} onOpenChange={setOpenDelete}>
            <AlertDialogContent blurIntensity="sm">
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will permanently delete this data and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel><IconX />Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-400 dark:text-white" onClick={() => onDeleteData(deleteData?.id)}><IconTrash />Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
