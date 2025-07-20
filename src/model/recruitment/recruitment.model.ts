import { Schema, model } from "mongoose";
import { IRecruitment } from "../../service/interfac/recruitment/recruitment.interfac";
const RecruitmentSchema: Schema = new Schema<IRecruitment>({
    jobId: { type: String },
    title: { type: String, },
    description: { type: String, },
    requirements: { type: [String], },
    location: { type: String, },
    openingDate: { type: Date, default: Date.now },
    closingDate: { type: Date, default: Date.now },
    name: { type: String, },
    email: { type: String, match: /.+\@.+\..+/ },
    phone: { type: String, },
    resumeUrl: { type: String },
    appliedPosition: { type: String, },
    applicationDate: { type: Date, },
    status: { type: String, enum: ['Applied', 'Interviewed', 'Hired', 'Rejected'], },
    interviewId: { type: String, },
    candidateId: { type: String, },
    interviewDate: { type: Date, default: Date.now },
    interviewers: { type: [String], },
    feedback: { type: String, },
    score: { type: Number, }
});

const Recruitment = model<IRecruitment>('Recruitment', RecruitmentSchema);
export default Recruitment;