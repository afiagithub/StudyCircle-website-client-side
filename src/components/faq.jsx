
const faq = () => {
    return (
        <section className="px-12">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center">
                    Frequently Asked Questions</h2>
                <div className="divide-y dark:divide-gray-300">
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">
                            Is StudyCircle free to use?
                        </h3>
                        <p className="md:pl-0 md:col-span-7">
                            Yes, StudyCircle is free to use for students.
                            There are no subscription fees or hidden charges.
                            Simply sign up for an account and start exploring the features to boost your study sessions.
                        </p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">
                            How do assignments work on StudyCircle?
                        </h3>
                        <p className="md:pl-0 md:col-span-7">
                            Any member can create assignments and set deadlines for completion &
                            all members can then access the assignments, complete them, and submit their work directly
                            within the platform.
                        </p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">
                            What happens if I miss a deadline for an assignment?
                        </h3>
                        <p className="md:pl-0 md:col-span-7">
                            Communicate with your group members and group admin if you anticipate missing a deadline.
                            They may be able to provide assistance or extensions on a case-by-case basis.
                        </p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">
                            Are there resources available to help me study on StudyCircle?
                        </h3>
                        <p className="md:pl-0 md:col-span-7">
                            Yes, StudyCircle provides a variety of resources to support your study efforts.
                            In addition to study groups and assignments, you can access study materials,
                            participate in discussions etc.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default faq;