import Link from 'next/link'

import AdminLayout from '../components/AdminLayout'
import ListPhotos from '../components/ListPhotos'

export default () => (
    <AdminLayout>
    	<ListPhotos 
    		title="List Photos"
    	/>
    </AdminLayout>
)
