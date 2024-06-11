import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function Create({ auth }) {
    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        directed_to: '',
        account_number: '',
    });

    const saveLetter = (e) => {
        e.preventDefault();

        post(route('company.account.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('directed_to', 'account_number');
                }
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">إنشاء حسابات بنكية</h2>}
        >
            <Head title="إنشاء حسابات بنكية" />

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='mb-4'>
                        <h1 className='text-2xl font-bold text-gray-600'>إنشاء حسابات بنكية</h1>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={saveLetter} className="space-y-6">
                                <div>
                                    <InputLabel htmlFor="directed_to" value="موجه الى" className='mb-2' />

                                    <TextInput
                                        id="directed_to"
                                        value={data.directed_to}
                                        onChange={(e) => setData('directed_to', e.target.value)}
                                        type="text"
                                        className="mt-1 block w-full"
                                        placeholder="مصرف الراجحي، مصرف الانماء ..."
                                        autoFocus
                                    />

                                    <InputError message={errors.directed_to} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="account_number" value="حساب الشركة" className='mb-2' />

                                    <TextInput
                                        id="account_number"
                                        value={data.account_number}
                                        onChange={(e) => setData('account_number', e.target.value)}
                                        type="text"
                                        className="mt-1 block w-full"
                                        placeholder="SA373736 ...."

                                    />

                                    <InputError message={errors.account_number} className="mt-2" />
                                </div>

                                <div className="flex items-center gap-4">
                                    <PrimaryButton disabled={processing}>حفظ</PrimaryButton>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600">تم الحفظ.</p>
                                    </Transition>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
