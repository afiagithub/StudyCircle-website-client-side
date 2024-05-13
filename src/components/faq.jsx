import { TbUserQuestion } from "react-icons/tb";

const faq = () => {
    return (
        <section className="lg:px-12">
            <div className="container px-6 py-12 mx-auto">
                <h1 className="text-2xl font-semibold lg:text-4xl text-center">Frequently asked questions.</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    <div>
                        <div className="inline-block p-3 text-white text-3xl bg-primary rounded-lg">
                            <TbUserQuestion />
                        </div>

                        <div>
                            <h1 className="text-xl font-semibold flex-grow h-14">Is StudyCircle free to use?</h1>

                            <p className="mt-2 text-sm">
                                Yes, StudyCircle is free to use for students.
                                There are no subscription fees or hidden charges.
                                Simply sign up for an account and start exploring the features to boost your study sessions.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="inline-block p-3 text-white text-3xl bg-primary rounded-lg">
                            <TbUserQuestion />
                        </div>

                        <div>
                            <h1 className="text-xl font-semibold flex-grow h-14">How do assignments work on StudyCircle?</h1>

                            <p className="mt-2 text-sm">
                                Any member can create assignments and set deadlines for completion &
                                all members can then access the assignments, complete them, and submit their work directly
                                within the platform.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="inline-block p-3 text-white text-3xl bg-primary rounded-lg">
                            <TbUserQuestion />
                        </div>

                        <div>
                            <h1 className="text-xl font-semibold flex-grow h-14">What happens if I miss a deadline for an assignment?</h1>

                            <p className="mt-2 text-sm">
                                Communicate with your group members and group admin if you anticipate missing a deadline.
                                They may be able to provide assistance or extensions on a case-by-case basis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default faq;