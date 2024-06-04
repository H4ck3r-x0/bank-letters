import BeneficiariesTable from '@/Components/Beneficiaries/BeneficiariesTable';
import BeneficiaryCreateForm from '@/Components/Beneficiaries/BeneficiaryCreateForm';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Create({ auth, beneficiaries }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">إضافة مستفيدين</h2>}
        >
            <Head title="إضافة مستفيدين" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='mb-4'>
                        <h1 className='text-2xl font-bold text-gray-600'>ارفاق بيانات المستفيدين</h1>
                        <p className='text-sm text-gray-500'>من هنا يمكنك ارفاق ملفات Excel للمستفيدين المراد انشاء خطابات بنكية لهم</p>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <BeneficiaryCreateForm />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='mb-4'>
                        <h1 className='text-2xl font-bold text-gray-600'>جميع بيانات المستفيدين</h1>
                        <p className='text-sm text-gray-500'>
                            هذا الجدول يوضح جميع بيانات المستفيدين في النظام، يمكنك من هنا اختيار المستفيد وانشاء خطاب بنكي.
                        </p>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <BeneficiariesTable beneficiaries={beneficiaries} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
