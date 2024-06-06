import React, { useState } from 'react'
import SecondaryButton from '../SecondaryButton'
import Modal from '../Beneficiaries/Modal'
function BeneficiariesTable({ beneficiaries, templates }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);

    const handleOpenModal = (beneficiary) => {
        setSelectedBeneficiary(beneficiary);
        setModalOpen(true);
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    templates={templates}
                    beneficiary={selectedBeneficiary}
                    onTemplateSelect={setSelectedTemplate}
                />
            )}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3">
                            اسم المستفيد
                        </th>
                        <th scope="col" className="px-6 py-3">
                            بنك المستفيد
                        </th>
                        <th scope="col" className="px-6 py-3">
                            السويفت كود
                        </th>
                        <th scope="col" className="px-6 py-3">
                            المبلغ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            العملة
                        </th>
                        <th scope="col" className="px-6 py-3">
                            رقم الحساب
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* loop through all the beneficiaries and display them */}
                    {beneficiaries.map((beneficiary) => (
                        <tr key={beneficiary.id} className="bg-white border-b hover:bg-gray-50 ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {beneficiary.id}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {beneficiary.beneficiary_name}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {beneficiary.beneficiary_bank}
                            </th>


                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {beneficiary.swift_code}
                            </th>


                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {beneficiary.amount}
                            </th>

                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {beneficiary.currency}
                            </th>

                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {beneficiary.account_no}
                            </th>

                            <td className="px-6 py-4 text-right">
                                <SecondaryButton onClick={() => handleOpenModal(beneficiary)}>انشاء خطاب</SecondaryButton>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}

export default BeneficiariesTable