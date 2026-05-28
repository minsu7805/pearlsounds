import React from "react";
import { motion } from "framer-motion";
import { Music2, Disc3, Mic2, Send, Sparkles, ArrowRight, Headphones, FileMusic, Building2 } from "lucide-react";

export default function PearlSoundsHomepage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-neutral-950 shadow-lg">
                <Disc3 size={22} />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-wide">Pearl Sounds</p>
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">Producing & Publishing</p>
              </div>
            </div>
            <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </header>

          <div className="grid min-h-[760px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 backdrop-blur">
                <Sparkles size={16} />
                Mood of Korea, Built for the Stage
              </div>
              <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                음악의 가능성을<br />
                하나의 작품으로 완성합니다.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300">
                Pearl Sounds는 K-POP, 발라드, 트로트, 퍼포먼스 음악을 기반으로
                작곡, 작사, 편곡, 보컬 디렉팅, 음반 제작, 퍼블리싱까지 연결하는
                음악 프로듀싱 브랜드입니다.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-neutral-950 shadow-xl transition hover:scale-[1.02]">
                  제작 문의하기 <ArrowRight size={18} />
                </a>
                <a href="#projects" className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-4 font-semibold text-white transition hover:bg-white/10">
                  프로젝트 보기
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.5rem] bg-neutral-900 p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-sm text-neutral-400">Current Focus</p>
                      <h2 className="mt-1 text-2xl font-semibold">Artist Production</h2>
                    </div>
                    <Headphones className="text-neutral-300" />
                  </div>
                  <div className="mt-6 space-y-4">
                    {[
                      ["01", "Songwriting", "멜로디·가사·콘셉트 설계"],
                      ["02", "Arrangement", "장르별 사운드 프로덕션"],
                      ["03", "Vocal Direction", "가수의 서사와 톤에 맞춘 디렉팅"],
                      ["04", "Release Planning", "음원 발매·콘텐츠 기획 연계"],
                    ].map(([num, title, desc]) => (
                      <div key={num} className="flex gap-4 rounded-2xl bg-white/[0.04] p-4">
                        <div className="text-sm font-semibold text-neutral-500">{num}</div>
                        <div>
                          <p className="font-semibold">{title}</p>
                          <p className="mt-1 text-sm text-neutral-400">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">About</p>
            <h2 className="mt-4 text-4xl font-bold">Pearl Sounds</h2>
          </div>
          <div className="text-lg leading-9 text-neutral-300">
            <p>
              Pearl Sounds는 아티스트의 목소리, 서사, 무대 가능성을 중심에 두고
              곡을 제작합니다. 단순히 음악을 만드는 것을 넘어, 가수에게 어울리는
              대표곡의 방향과 콘텐츠 확장성까지 함께 설계합니다.
            </p>
            <p className="mt-6">
              JNA Entertainment의 제작 기반, Stage2 Project의 발매 프로젝트,
              DreamLink의 신인·오디션 플랫폼과 연결되어 음악 제작부터 아티스트 브랜딩까지
              유기적으로 확장할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">Services</p>
            <h2 className="mt-4 text-4xl font-bold">제작 가능한 영역</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: Music2, title: "작곡·작사·편곡", desc: "K-POP, 발라드, 트로트, 퍼포먼스 음악 등 아티스트 색깔에 맞춘 신곡 제작" },
              { icon: Mic2, title: "보컬 디렉팅", desc: "가수의 음색과 서사를 살리는 녹음 디렉팅, 키 설정, 감정선 설계" },
              { icon: FileMusic, title: "음반 제작", desc: "데모 개발부터 마스터링, 자켓, 발매 기획까지 연결되는 제작 시스템" },
              { icon: Building2, title: "기획사 협업", desc: "가수·기획사 대상 외주 제작, 공동 제작, 퍼블리싱 협업 제안 가능" },
              { icon: Disc3, title: "퍼블리싱", desc: "작품 관리, 저작권 기반 수익 구조, 장기적인 음악 IP 운영" },
              { icon: Sparkles, title: "콘텐츠 연계", desc: "뮤직비디오, 쇼츠, 라이브 클립, 아티스트 소개 콘텐츠까지 확장" },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-neutral-950 p-7 shadow-xl">
                <item.icon className="mb-6 text-neutral-300" size={30} />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">Projects</p>
        <h2 className="mt-4 text-4xl font-bold">Connected Projects</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["Stage2 Project", "The Second Stage Begins", "다시 조명받아야 할 보컬과 아티스트를 위한 제작·발매 프로젝트"],
            ["DreamLink", "Audition & Performance Platform", "신인, 오디션 지망생, 퍼포먼스 콘텐츠를 연결하는 플랫폼"],
            ["JNA Entertainment", "Production Management", "음악 교육, 제작, 아티스트 프로젝트를 총괄하는 기반 브랜드"],
          ].map(([title, sub, desc]) => (
            <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm text-neutral-500">{sub}</p>
              <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
              <p className="mt-5 leading-7 text-neutral-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2rem] border border-white/10 bg-neutral-950 p-10 md:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">For Artists & Labels</p>
                <h2 className="mt-4 text-4xl font-bold leading-tight">새로운 곡, 새로운 무대가 필요하다면</h2>
                <p className="mt-6 max-w-2xl leading-8 text-neutral-300">
                  Pearl Sounds는 가수의 현재 위치와 앞으로의 활동 방향을 함께 고려해
                  가장 설득력 있는 곡과 제작 방식을 제안합니다.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-7 text-neutral-950">
                <p className="text-sm font-semibold text-neutral-500">Proposal Includes</p>
                <ul className="mt-5 space-y-3 text-sm leading-6">
                  <li>• 데모 음원 및 곡 콘셉트 제안</li>
                  <li>• 가수 이미지에 맞춘 장르·가사 방향</li>
                  <li>• 제작비 및 공동 제작 구조 협의</li>
                  <li>• 발매 후 콘텐츠·홍보 방향 제안</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">Contact</p>
            <h2 className="mt-4 text-4xl font-bold">제작 문의</h2>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-lg leading-8 text-neutral-300">
              아티스트 신곡 제작, 기획사 외주 제작, 공동 제작, 퍼블리싱 협업을 원하시면
              아래 메일로 문의해 주세요.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:minsu7805@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-neutral-950 transition hover:scale-[1.02]">
                <Send size={18} /> minsu7805@gmail.com
              </a>
              <a href="https://www.youtube.com/@dreamlink_official" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-4 font-semibold text-white transition hover:bg-white/10">
                DreamLink YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© Pearl Sounds. All rights reserved.</p>
          <p>Producing & Publishing Company · Mood of Korea</p>
        </div>
      </footer>
    </div>
  );
}
