import React from 'react'

function BeneficiariesTable({ beneficiaries }) {
    return (


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                        <tr key={beneficiary.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {beneficiary.id}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {beneficiary.beneficiary_name}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {beneficiary.beneficiary_bank}
                            </th>


                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {beneficiary.swift_code}
                            </th>


                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {beneficiary.amount}
                            </th>

                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {beneficiary.currency}
                            </th>

                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {beneficiary.account_no}
                            </th>

                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}

export default BeneficiariesTable