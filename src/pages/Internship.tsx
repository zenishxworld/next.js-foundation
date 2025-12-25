import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Rocket, Calendar, CheckCircle, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Profession = 'student' | 'employee';
type InternshipType = 'frontend' | 'fullstack' | 'uiux' | 'aiml';

type InternshipRecord = {
  _id: string;
  fullName: string;
  email: string;
  profession: Profession;
  collegeName?: string;
  courseName?: string;
  currentYear?: string;
  internshipType: InternshipType;
  status: string;
  assignedRole?: string;
  createdAt: string;
};

const Internship = () => {
  const [form, setForm] = useState<{ 
    fullName: string; 
    email: string; 
    profession: Profession; 
    collegeName: string; 
    courseName: string; 
    currentYear: string; 
    internshipType: InternshipType; 
  }>({
    fullName: '',
    email: '',
    profession: 'student',
    collegeName: '',
    courseName: '',
    currentYear: '1st',
    internshipType: 'frontend',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [list, setList] = useState<InternshipRecord[]>([]);

  // Use relative /api in production; dev proxies to localhost via Vite
  const API_BASE = (import.meta as any).env?.VITE_API_BASE || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // (Optional) Load submissions (kept as-is for future admin use)
  useEffect(() => {
    fetch(`${API_BASE}/api/internships`)
      .then(res => res.json())
      .then((data: InternshipRecord[]) => setList(data))
      .catch(() => {});
  }, []);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setError(null);

    // Basic client-side validation (lightweight + user-friendly)
    if (!form.fullName.trim()) {
      setError('Please enter your full name.');
      setSubmitting(false);
      return;
    }
    if (!validateEmail(form.email.trim())) {
      setError('Please enter a valid email address.');
      setSubmitting(false);
      return;
    }
    if (form.profession === 'student' && (!form.collegeName.trim() || !form.courseName.trim())) {
      setError('Please enter your college and course name.');
      setSubmitting(false);
      return;
    }

    try {
      const payload: any = {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        profession: form.profession,
        internshipType: form.internshipType,
      };

      if (form.profession === 'student') {
        payload.collegeName = form.collegeName.trim();
        payload.courseName = form.courseName.trim();
        payload.currentYear = form.currentYear;
      }

      const res = await fetch(`${API_BASE}/api/internships`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let msg = 'Failed to submit';
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch {}
        throw new Error(msg);
      }

      const created: InternshipRecord = await res.json();
      setList(prev => [created, ...prev]);
      setSubmitted(true);
      setForm({
        fullName: '',
        email: '',
        profession: 'student',
        collegeName: '',
        courseName: '',
        currentYear: '1st',
        internshipType: 'frontend',
      });
    } catch (err: any) {
      setError(err?.message || 'Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLayout showContact={false}>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">

            {/* Back */}
            <Link 
              to="/careers" 
              className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>

            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl sm:text-4xl font-bold">ApexDeploy Internship</h1>
            </div>
            <p className="text-gray-600 mb-8 text-base sm:text-lg">
              Build real features for real products. Learn modern web, app, and AI development with hands-on mentorship and production experience.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Application Form */}
              <Card className="border-gray-200 shadow-sm lg:col-span-2">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold mb-4">Apply Now</h2>
                  <p className="text-gray-600 text-sm mb-6">
                    Fill in your details. We’ll review your application and reach out with a short screening task if selected.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName" className="text-sm">Full Name</Label>
                        <Input 
                          id="fullName" 
                          placeholder="e.g., Jane Doe" 
                          value={form.fullName} 
                          onChange={e => setForm({ ...form, fullName: e.target.value })} 
                          required 
                          className="mt-1 rounded-lg" 
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="jane@example.com" 
                          value={form.email} 
                          onChange={e => setForm({ ...form, email: e.target.value })} 
                          required 
                          className="mt-1 rounded-lg" 
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm">Profession</Label>
                      <RadioGroup 
                        value={form.profession} 
                        onValueChange={(v) => setForm({ ...form, profession: v as Profession })} 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2"
                      >
                        <label htmlFor="student" className="flex items-center gap-3 rounded-lg border p-3 hover:bg-gray-50 transition-colors cursor-pointer">
                          <RadioGroupItem value="student" id="student" className="h-4 w-4 shrink-0" />
                          <span>Student</span>
                        </label>
                        <label htmlFor="employee" className="flex items-center gap-3 rounded-lg border p-3 hover:bg-gray-50 transition-colors cursor-pointer">
                          <RadioGroupItem value="employee" id="employee" className="h-4 w-4 shrink-0" />
                          <span>Working Professional</span>
                        </label>
                      </RadioGroup>
                    </div>

                    {form.profession === 'student' && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="sm:col-span-2">
                          <Label htmlFor="collegeName" className="text-sm">College / University</Label>
                          <Input 
                            id="collegeName" 
                            placeholder="e.g., ABC Institute of Technology" 
                            value={form.collegeName} 
                            onChange={e => setForm({ ...form, collegeName: e.target.value })} 
                            className="mt-1 rounded-lg" 
                          />
                        </div>
                        <div>
                          <Label htmlFor="courseName" className="text-sm">Course</Label>
                          <Input 
                            id="courseName" 
                            placeholder="e.g., Computer Science" 
                            value={form.courseName} 
                            onChange={e => setForm({ ...form, courseName: e.target.value })} 
                            className="mt-1 rounded-lg" 
                          />
                        </div>
                        <div>
                          <Label htmlFor="currentYear" className="text-sm">Current Year</Label>
                          <Select 
                            value={form.currentYear} 
                            onValueChange={(value) => setForm({ ...form, currentYear: value })}
                          >
                            <SelectTrigger className="mt-1 rounded-lg">
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1st">1st Year</SelectItem>
                              <SelectItem value="2nd">2nd Year</SelectItem>
                              <SelectItem value="3rd">3rd Year</SelectItem>
                              <SelectItem value="4th">4th Year</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    <div>
                      <Label className="text-sm">Preferred Track</Label>
                      <RadioGroup 
                        value={form.internshipType} 
                        onValueChange={(v) => setForm({ ...form, internshipType: v as InternshipType })} 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2"
                      >
                        <label htmlFor="frontend" className="flex items-center gap-3 rounded-lg border p-3 hover:bg-gray-50 transition-colors cursor-pointer">
                          <RadioGroupItem value="frontend" id="frontend" className="h-4 w-4 shrink-0" />
                          <span>Front-End Development</span>
                        </label>
                        <label htmlFor="fullstack" className="flex items-center gap-3 rounded-lg border p-3 hover:bg-gray-50 transition-colors cursor-pointer">
                          <RadioGroupItem value="fullstack" id="fullstack" className="h-4 w-4 shrink-0" />
                          <span>Full-Stack Development</span>
                        </label>
                        <label htmlFor="uiux" className="flex items-center gap-3 rounded-lg border p-3 hover:bg-gray-50 transition-colors cursor-pointer">
                          <RadioGroupItem value="uiux" id="uiux" className="h-4 w-4 shrink-0" />
                          <span>UI/UX Design</span>
                        </label>
                        <label htmlFor="aiml" className="flex items-center gap-3 rounded-lg border p-3 hover:bg-gray-50 transition-colors cursor-pointer">
                          <RadioGroupItem value="aiml" id="aiml" className="h-4 w-4 shrink-0" />
                          <span>AI / ML</span>
                        </label>
                      </RadioGroup>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button type="submit" className="rounded-lg" disabled={submitting}>
                        {submitting ? 'Submitting…' : 'Submit Application'}
                      </Button>

                      {submitted && (
                        <span className="text-green-700 text-sm flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          Application received. We’ll email you soon.
                        </span>
                      )}
                      {error && (
                        <span className="text-red-600 text-sm">{error}</span>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 pt-2">
                      By submitting this form, you agree to our use of your data for recruitment. We’ll never share your details with third parties.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Right Column — Program Info */}
              <div className="space-y-8">
                <Card className="border-gray-200 shadow-sm">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Rocket className="w-4 h-4 text-gray-700" />
                      <h2 className="text-lg font-semibold">Build With Us</h2>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">
                      Work with our team on <b>real client features</b>. Learn how modern products are planned, designed, built, tested, and shipped.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="rounded-lg border p-3">
                        <span className="font-medium">Front-End</span>
                        <p className="text-sm text-gray-600 mt-1">React, TypeScript, Tailwind, accessibility, UX.</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <span className="font-medium">Full-Stack</span>
                        <p className="text-sm text-gray-600 mt-1">Node.js, REST APIs, databases, auth.</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <span className="font-medium">UI/UX</span>
                        <p className="text-sm text-gray-600 mt-1">Wireframes, prototypes, design systems.</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <span className="font-medium">AI / ML</span>
                        <p className="text-sm text-gray-600 mt-1">Data prep, model integration, AI agents.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 shadow-sm">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-gray-700" />
                      <h2 className="text-lg font-semibold">Program Details</h2>
                    </div>

                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span><span className="font-medium">Duration:</span> 4–10 weeks (flexible).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span><span className="font-medium">Commitment:</span> ~15–20 hours/week.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span><span className="font-medium">Mentorship:</span> Weekly 1:1s, code reviews, and design critiques.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span><span className="font-medium">Process:</span> Application → screening task → interview → onboarding.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span><span className="font-medium">Outcome:</span> Portfolio-grade work, certificate, and potential offer for top performers.</span>
                      </li>
                    </ul>

                    <div className="mt-4 text-sm text-gray-600">
                      <p>Have questions? <Link to="/careers" className="underline hover:text-gray-800">Visit Careers</Link> or email us.</p>
                      <div className="flex items-center gap-2 mt-2 text-gray-700">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:hello@apexdeploy.com" className="hover:text-gray-900">
                          ceo.apexdeploy@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Optional: Lightweight FAQ (brand-aligned, short and useful) */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="border-gray-200 shadow-sm lg:col-span-2">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-lg font-semibold mb-4">FAQ</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <p className="font-medium">What do I receive after completing the internship successfully?</p>
                      <p className="text-gray-600 mt-1">
                        All interns who complete the training modules and their real project assignment earn a certificate of completion and may receive a Letter of Recommendation highlighting their strengths.                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Do I need prior experience?</p>
                      <p className="text-gray-600 mt-1">
                        Basic knowledge of your chosen track is helpful. Curiosity, discipline, and willingness to learn matter most.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Can this convert to a job?</p>
                      <p className="text-gray-600 mt-1">
                        Yes — top performers may be offered extended internships or contract roles depending on availability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-lg font-semibold mb-4">What You’ll Learn</h2>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Modern stack: React, Node, APIs, databases, cloud</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Product thinking, UX, and clean code practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Shipping to production and writing documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Internship;
