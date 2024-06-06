import { useDropzone } from 'react-dropzone';
import InputError from '../InputError';
import PrimaryButton from '../PrimaryButton';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';

const XmlUploadDropzone = ({ onFilesAdded }) => {
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: onFilesAdded,
        multiple: true,
        accept: {
            'application/vnd.ms-excel': ['.xls'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
        }
    });

    return (
        <div {...getRootProps()}
            className="bg-slate-50 border-dashed border-2 border-gray-300 hover:border-secundary p-8 hover:bg-white text-center cursor-pointer transition-colors
         ">
            <input {...getInputProps()} />
            <p className='text-lg text-primary'>قم بإدراج ملفات الاكسيل للمستفيدين هنا ...</p>
        </div>
    );
};


export default function DropFiles() {
    const { data, setData, post, progress, processing, recentlySuccessful, reset, errors } = useForm({
        excelFiles: [],
    });

    const submit = (e) => {
        e.preventDefault();

        if (Array.isArray(data.excelFiles) && data.excelFiles.length) {
            const formData = new FormData();
            data.excelFiles.forEach(file => {
                formData.append('excelFiles[]', file);
            });


            post(route('beneficiary.store'), {
                forceFormData: true,
                onSuccess: () => {
                    reset();
                }
            });
        }
    };

    const handleFiles = (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            setData('excelFiles', acceptedFiles);
        }
    };

    const removeFile = (index) => {
        const newFiles = data.excelFiles.filter((_, i) => i !== index);
        setData('excelFiles', newFiles);
    };

    const files = data.excelFiles.map((file, index) => (
        <li className='flex items-center gap-3 mb-3' key={file.path}>
            <p> {file.path} - {file.size} bytes</p>
            <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-500/80 transition-colors ml-2">حذف</button>
        </li>
    ));


    return (
        <form onSubmit={submit} className="space-y-6">
            <div>
                <XmlUploadDropzone onFilesAdded={handleFiles} files={data.xmlFiles} onRemoveFile={removeFile} />
                <InputError message={errors.xmlFiles} className="mt-2" />
            </div>
            <ul className='mb-6'>
                {files}
            </ul>
            {progress && (
                <progress className="w-full h-2 bg-gray-200 rounded-full overflow-hidden" value={progress.percentage} max="100">
                    <div className=" bg-secundary h-full" style={{ width: `${progress.percentage}%` }}></div>
                </progress>
            )}
            <div className="flex items-center justify-between">
                <PrimaryButton disabled={processing || !data.excelFiles.length} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
                    معالجة المستفيدين
                </PrimaryButton>
                <Transition
                    show={recentlySuccessful}
                    enter="transition-opacity duration-500"
                    enterFrom="opacity-0"
                    leave="transition-opacity duration-500"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-green-600">تمت معالجة المستفيدين بنجاح.</p>
                </Transition>
            </div>
        </form>
    )
}