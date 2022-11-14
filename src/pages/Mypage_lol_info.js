import React, { useEffect, useState } from 'react';
import Header from './Header';
import './css/mypage_lol_info.css';
import { useNavigate } from "react-router-dom";

/*const [search, setSearch] = useState("");
const onChange = (e) => {
    setSearch(e.target.value)
}

const filterTitle = movies.filter((p) => {
    return p.title.toLocaleLowerCase(" ","").includes(search.toLocaleLowerCase().replace(" ",""))
})*/

const Mypage = () => {
  let navigate = useNavigate();
  
    return (
      <div>
        <Header/>
        
        <div className="mypage_background">
            <section className="mypage_container">
                <aside className="sidebar">
                    <div className="sidebar_userinfo">
                        <div className="user_name">
                            <span className="name">계정이름</span>
                        </div>
                    </div>
                    <div className="sidebar_usermenu">
                        <ul className="menu_list">
                            <li className="item" data-page="course_list" onClick={()=>navigate("/mypage_course_list")}>수강 내역</li>
                            <li className="item" data-page="regist_mentor" onClick={()=>navigate("/mypage_regist_mentor")}>멘토 등록</li>
                            <li className="item" data-page="lol_info" onClick={()=>navigate("/mypage_lol_info")}>lol 정보</li>
                        </ul>
                    </div>
                </aside>
                <div className="main_common">
                    <div className="mypage_lol_info">
                        <div className="manage">
                            <div className="lol">
                                <div className="lol_info_name">lol 계정정보</div>
                                <form className="summoner">
                                    <input className="summoner_name" type="text" placeholder="소환사명"/>
                                    <div className="info_wrapper">
                                        <div className="lol_info_name">등급</div>
                                        <select className="estimateRequestTierSelect">
                                            <option value="i4">아이언IV</option>
                                            <option value="i3">아이언III</option>
                                            <option value="i2">아이언II</option>
                                            <option value="i1">아이언I</option>
                                            <option value="b4">브론즈IV</option>
                                            <option value="b3">브론즈III</option>
                                            <option value="b2">브론즈II</option>
                                            <option value="b1">브론즈I</option>
                                            <option value="s4">실버IV</option>
                                            <option value="s3">실버III</option>
                                            <option value="s2">실버II</option>
                                            <option value="s1">실버I</option>
                                            <option value="g4">골드IV</option>
                                            <option value="g3">골드III</option>
                                            <option value="g2">골드II</option>
                                            <option value="g1">골드I</option>
                                            <option value="p4">플래티넘IV</option>
                                            <option value="p3">플래티넘III</option>
                                            <option value="p2">플래티넘II</option>
                                            <option value="p1">플래티넘I</option>
                                            <option value="d4">다이아몬드IV</option>
                                            <option value="d3">다이아몬드III</option>
                                            <option value="d2">다이아몬드II</option>
                                            <option value="d1">다이아몬드I</option>
                                            <option value="m">마스터</option>
                                            <option value="gm">그랜드마스터</option>
                                            <option value="c">챌린저</option>
                                        </select>
                                    </div>
                                    <div className="position">
                                        <div className="lol_info_name">포지션</div>
                                        <div className="position_list">
                                            <input id="top" type="checkbox"/>탑
                                            <input id="mid" type="checkbox"/>미드
                                            <input id="juggle" type="checkbox"/>정글
                                            <input id="adc" type="checkbox"/>원딜
                                            <input id="support" type="checkbox"/>서포터
                                        </div>
                                    </div>
                                </form>
                                <div className="champion_list" id="estimateChampionAllSelectList">
                                <div className="lol_info_name">챔피언</div>

                                <div className="champion_search_list">
                                    <div className="champions">
                                        <div className="list" id="list1">
                                            <input type="checkbox" className="champion" id="가렌"/><div className="champion_text">가렌</div>
                                            <input type="checkbox" className="champion" id="갈리오"/><div className="champion_text">갈리오</div>
                                            <input type="checkbox" className="champion" id="갱플랭크"/><div className="champion_text">갱플랭크</div>
                                            <input type="checkbox" className="champion" id="그라가스"/><div className="champion_text">그라가스</div>
                                            <input type="checkbox" className="champion" id="그레이브즈"/><div className="champion_text">그레이브즈</div>
                                        </div>
                                        <div className="list" id="list2">
                                            <input type="checkbox" className="champion" id="그웬"/><div className="champion_text">그웬</div>
                                            <input type="checkbox" className="champion" id="나르"/><div className="champion_text">나르</div>
                                            <input type="checkbox" className="champion" id="나미"/><div className="champion_text">나미</div>
                                            <input type="checkbox" className="champion" id="나서스"/><div className="champion_text">나서스</div>
                                            <input type="checkbox" className="champion" id="노틸러스"/><div className="champion_text">노틸러스</div>
                                        </div>
                                        <div className="list" id="list3">
                                            <input type="checkbox" className="champion" id="녹턴"/><div className="champion_text">녹턴</div>
                                            <input type="checkbox" className="champion" id="누누와 월럼프"/><div className="champion_text">누누와 월럼프</div>
                                            <input type="checkbox" className="champion" id="니달리"/><div className="champion_text">니달리</div>
                                            <input type="checkbox" className="champion" id="니코"/><div className="champion_text">니코</div>
                                            <input type="checkbox" className="champion" id="닐라"/><div className="champion_text">닐라</div>
                                        </div>
                                        <div className="list" id="list4">
                                            <input type="checkbox" className="champion" id="다리우스"/><div className="champion_text">다리우스</div>
                                            <input type="checkbox" className="champion" id="다이애나"/><div className="champion_text">다이애나</div>
                                            <input type="checkbox" className="champion" id="드레이븐"/><div className="champion_text">드레이븐</div>
                                            <input type="checkbox" className="champion" id="라이즈"/><div className="champion_text">라이즈</div>
                                            <input type="checkbox" className="champion" id="라칸"/><div className="champion_text">라칸</div>
                                        </div>
                                        <div className="list" id="list5">
                                            <input type="checkbox" className="champion" id="람머스"/><div className="champion_text">람머스</div>
                                            <input type="checkbox" className="champion" id="럭스"/><div className="champion_text">럭스</div>
                                            <input type="checkbox" className="champion" id="럼블"/><div className="champion_text">럼블</div>
                                            <input type="checkbox" className="champion" id="레나타 클라스크"/><div className="champion_text">레나타 클라스크</div>
                                            <input type="checkbox" className="champion" id="레넥톤"/><div className="champion_text">레넥톤</div>
                                        </div>
                                        <div className="list" id="list6">
                                            <input type="checkbox" className="champion" id="레오나"/><div className="champion_text">레오나</div>
                                            <input type="checkbox" className="champion" id="렉사이"/><div className="champion_text">렉사이</div>
                                            <input type="checkbox" className="champion" id="렐"/><div className="champion_text">렐</div>
                                            <input type="checkbox" className="champion" id="렝가"/><div className="champion_text">렝가</div>
                                            <input type="checkbox" className="champion" id="루시안"/><div className="champion_text">루시안</div>
                                        </div>
                                        <div className="list" id="list7">
                                            <input type="checkbox" className="champion" id="룰루"/><div className="champion_text">룰루</div>
                                            <input type="checkbox" className="champion" id="르블랑"/><div className="champion_text">르블랑</div>
                                            <input type="checkbox" className="champion" id="리 신"/><div className="champion_text">리 신</div>
                                            <input type="checkbox" className="champion" id="리븐"/><div className="champion_text">리븐</div>
                                            <input type="checkbox" className="champion" id="리산드라"/><div className="champion_text">리산드라</div>
                                        </div>
                                        <div className="list" id="list8">
                                            <input type="checkbox" className="champion" id="릴리아"/><div className="champion_text">릴리아</div>
                                            <input type="checkbox" className="champion" id="마스터 이"/><div className="champion_text">마스터 이</div>
                                            <input type="checkbox" className="champion" id="마오카이"/><div className="champion_text">마오카이</div>
                                            <input type="checkbox" className="champion" id="말자하"/><div className="champion_text">말자하</div>
                                            <input type="checkbox" className="champion" id="말파이트"/><div className="champion_text">말파이트</div>
                                        </div>
                                        <div className="list" id="list9">
                                            <input type="checkbox" className="champion" id="모데카이저"/><div className="champion_text">모데카이저</div>
                                            <input type="checkbox" className="champion" id="모르가나"/><div className="champion_text">모르가나</div>
                                            <input type="checkbox" className="champion" id="문도 박사"/><div className="champion_text">문도 박사</div>
                                            <input type="checkbox" className="champion" id="미스 포츈"/><div className="champion_text">미스 포츈</div>
                                            <input type="checkbox" className="champion" id="바드"/><div className="champion_text">바드</div>
                                        </div>
                                        <div className="list" id="list10">
                                            <input type="checkbox" className="champion" id="바루스"/><div className="champion_text">바루스</div>
                                            <input type="checkbox" className="champion" id="바이"/><div className="champion_text">바이</div>
                                            <input type="checkbox" className="champion" id="베이가"/><div className="champion_text">베이가</div>
                                            <input type="checkbox" className="champion" id="베인"/><div className="champion_text">베인</div>
                                            <input type="checkbox" className="champion" id="벡스"/><div className="champion_text">벡스</div>
                                        </div>
                                        <div className="list" id="list11">
                                            <input type="checkbox" className="champion" id="벨베스"/><div className="champion_text">벨베스</div>
                                            <input type="checkbox" className="champion" id="벨코즈"/><div className="champion_text">벨코즈</div>
                                            <input type="checkbox" className="champion" id="볼리베어"/><div className="champion_text">볼리베어</div>
                                            <input type="checkbox" className="champion" id="브라움"/><div className="champion_text">브라움</div>
                                            <input type="checkbox" className="champion" id="브랜드"/><div className="champion_text">브랜드</div>
                                        </div>
                                        <div className="list" id="list12">
                                            <input type="checkbox" className="champion" id="블라디미르"/><div className="champion_text">블라디미르</div>
                                            <input type="checkbox" className="champion" id="블리츠크랭크"/><div className="champion_text">블리츠크랭크</div>
                                            <input type="checkbox" className="champion" id="비에고"/><div className="champion_text">비에고</div>
                                            <input type="checkbox" className="champion" id="빅토르"/><div className="champion_text">빅토르</div>
                                            <input type="checkbox" className="champion" id="뽀삐"/><div className="champion_text">뽀삐</div>
                                        </div>
                                        <div className="list" id="list13">
                                            <input type="checkbox" className="champion" id="사미라"/><div className="champion_text">사미라</div>
                                            <input type="checkbox" className="champion" id="사이온"/><div className="champion_text">사이온</div>
                                            <input type="checkbox" className="champion" id="사일러스"/><div className="champion_text">사일러스</div>
                                            <input type="checkbox" className="champion" id="샤코"/><div className="champion_text">샤코</div>
                                            <input type="checkbox" className="champion" id="세나"/><div className="champion_text">세나</div>
                                        </div>
                                        <div className="list" id="list14">
                                            <input type="checkbox" className="champion" id="세라핀"/><div className="champion_text">세라핀</div>
                                            <input type="checkbox" className="champion" id="세주아니"/><div className="champion_text">세주아니</div>
                                            <input type="checkbox" className="champion" id="세트"/><div className="champion_text">세트</div>
                                            <input type="checkbox" className="champion" id="소나"/><div className="champion_text">소나</div>
                                            <input type="checkbox" className="champion" id="소라카"/><div className="champion_text">소라카</div>
                                        </div>
                                        <div className="list" id="list15">
                                            <input type="checkbox" className="champion" id="쉔"/><div className="champion_text">쉔</div>
                                            <input type="checkbox" className="champion" id="쉬바나"/><div className="champion_text">쉬바나</div>
                                            <input type="checkbox" className="champion" id="스웨인"/><div className="champion_text">스웨인</div>
                                            <input type="checkbox" className="champion" id="스카너"/><div className="champion_text">스카너</div>
                                            <input type="checkbox" className="champion" id="시비르"/><div className="champion_text">시비르</div>
                                        </div>
                                        <div className="list" id="list16">
                                            <input type="checkbox" className="champion" id="신 짜오"/><div className="champion_text">신 짜오</div>
                                            <input type="checkbox" className="champion" id="신드라"/><div className="champion_text">신드라</div>
                                            <input type="checkbox" className="champion" id="신지드"/><div className="champion_text">신지드</div>
                                            <input type="checkbox" className="champion" id="쓰레쉬"/><div className="champion_text">쓰레쉬</div>
                                            <input type="checkbox" className="champion" id="아리"/><div className="champion_text">아리</div>
                                        </div>
                                        <div className="list" id="list17">
                                            <input type="checkbox" className="champion" id="아무무"/><div className="champion_text">아무무</div>
                                            <input type="checkbox" className="champion" id="아우렐리온 솔"/><div className="champion_text">아우렐리온 솔</div>
                                            <input type="checkbox" className="champion" id="아이번"/><div className="champion_text">아이번</div>
                                            <input type="checkbox" className="champion" id="아지르"/><div className="champion_text">아지르</div>
                                            <input type="checkbox" className="champion" id="아칼리"/><div className="champion_text">아칼리</div>
                                        </div>
                                        <div className="list" id="list18">
                                            <input type="checkbox" className="champion" id="아크샨"/><div className="champion_text">아크샨</div>
                                            <input type="checkbox" className="champion" id="아트록스"/><div className="champion_text">아트록스</div>
                                            <input type="checkbox" className="champion" id="아펠리오스"/><div className="champion_text">아펠리오스</div>
                                            <input type="checkbox" className="champion" id="알리스타"/><div className="champion_text">알리스타</div>
                                            <input type="checkbox" className="champion" id="애니"/><div className="champion_text">애니</div>
                                        </div>
                                        <div className="list" id="list19">
                                            <input type="checkbox" className="champion" id="애니비아"/><div className="champion_text">애니비아</div>
                                            <input type="checkbox" className="champion" id="애쉬"/><div className="champion_text">애쉬</div>
                                            <input type="checkbox" className="champion" id="야스오"/><div className="champion_text">야스오</div>
                                            <input type="checkbox" className="champion" id="에코"/><div className="champion_text">에코</div>
                                            <input type="checkbox" className="champion" id="엘리스"/><div className="champion_text">엘리스</div>
                                        </div>
                                        <div className="list" id="list20">
                                            <input type="checkbox" className="champion" id="오공"/><div className="champion_text">오공</div>
                                            <input type="checkbox" className="champion" id="오른"/><div className="champion_text">오른</div>
                                            <input type="checkbox" className="champion" id="오리아나"/><div className="champion_text">오리아나</div>
                                            <input type="checkbox" className="champion" id="올라프"/><div className="champion_text">올라프</div>
                                            <input type="checkbox" className="champion" id="요네"/><div className="champion_text">요네</div>
                                        </div>
                                        <div className="list" id="list21">
                                            <input type="checkbox" className="champion" id="요릭"/><div className="champion_text">요릭</div>
                                            <input type="checkbox" className="champion" id="우디르"/><div className="champion_text">우디르</div>
                                            <input type="checkbox" className="champion" id="우르곳"/><div className="champion_text">우르곳</div>
                                            <input type="checkbox" className="champion" id="워윅"/><div className="champion_text">워윅</div>
                                            <input type="checkbox" className="champion" id="유미"/><div className="champion_text">유미</div>
                                        </div>
                                        <div className="list" id="list22">
                                            <input type="checkbox" className="champion" id="이렐리아"/><div className="champion_text">이렐리아</div>
                                            <input type="checkbox" className="champion" id="이블린"/><div className="champion_text">이블린</div>
                                            <input type="checkbox" className="champion" id="이즈리얼"/><div className="champion_text">이즈리얼</div>
                                            <input type="checkbox" className="champion" id="일라오이"/><div className="champion_text">일라오이</div>
                                            <input type="checkbox" className="champion" id="자르반 4세"/><div className="champion_text">자르반 4세</div>
                                        </div>
                                        <div className="list" id="list23">
                                            <input type="checkbox" className="champion" id="자야"/><div className="champion_text">자야</div>
                                            <input type="checkbox" className="champion" id="자이라"/><div className="champion_text">자이라</div>
                                            <input type="checkbox" className="champion" id="자크"/><div className="champion_text">자크</div>
                                            <input type="checkbox" className="champion" id="잔나"/><div className="champion_text">잔나</div>
                                            <input type="checkbox" className="champion" id="잭스"/><div className="champion_text">잭스</div>
                                        </div>
                                        <div className="list" id="list24">
                                            <input type="checkbox" className="champion" id="제드"/><div className="champion_text">제드</div>
                                            <input type="checkbox" className="champion" id="제라스"/><div className="champion_text">제라스</div>
                                            <input type="checkbox" className="champion" id="제리"/><div className="champion_text">제리</div>
                                            <input type="checkbox" className="champion" id="제이스"/><div className="champion_text">제이스</div>
                                            <input type="checkbox" className="champion" id="조이"/><div className="champion_text">조이</div>
                                        </div>
                                        <div className="list" id="list25">
                                            <input type="checkbox" className="champion" id="직스"/><div className="champion_text">직스</div>
                                            <input type="checkbox" className="champion" id="진"/><div className="champion_text">진</div>
                                            <input type="checkbox" className="champion" id="질리언"/><div className="champion_text">질리언</div>
                                            <input type="checkbox" className="champion" id="징크스"/><div className="champion_text">징크스</div>
                                            <input type="checkbox" className="champion" id="초가스"/><div className="champion_text">초가스</div>
                                        </div>
                                        <div className="list" id="list26">
                                            <input type="checkbox" className="champion" id="카르마"/><div className="champion_text">카르마</div>
                                            <input type="checkbox" className="champion" id="카밀"/><div className="champion_text">카밀</div>
                                            <input type="checkbox" className="champion" id="카사딘"/><div className="champion_text">카사딘</div>
                                            <input type="checkbox" className="champion" id="카서스"/><div className="champion_text">카서스</div>
                                            <input type="checkbox" className="champion" id="카시오페아"/><div className="champion_text">카시오페아</div>
                                        </div>
                                        <div className="list" id="list27">
                                            <input type="checkbox" className="champion" id="카이사"/><div className="champion_text">카이사</div>
                                            <input type="checkbox" className="champion" id="카직스"/><div className="champion_text">카직스</div>
                                            <input type="checkbox" className="champion" id="카타리나"/><div className="champion_text">카타리나</div>
                                            <input type="checkbox" className="champion" id="칼리스타"/><div className="champion_text">칼리스타</div>
                                            <input type="checkbox" className="champion" id="케넨"/><div className="champion_text">케넨</div>
                                        </div>
                                        <div className="list" id="list28">
                                            <input type="checkbox" className="champion" id="케이틀린"/><div className="champion_text">케이틀린</div>
                                            <input type="checkbox" className="champion" id="케인"/><div className="champion_text">케인</div>
                                            <input type="checkbox" className="champion" id="케일"/><div className="champion_text">케일</div>
                                            <input type="checkbox" className="champion" id="코그모"/><div className="champion_text">코그모</div>
                                            <input type="checkbox" className="champion" id="코르키"/><div className="champion_text">코르키</div>
                                        </div>
                                        <div className="list" id="list29">
                                            <input type="checkbox" className="champion" id="퀸"/><div className="champion_text">퀸</div>
                                            <input type="checkbox" className="champion" id="크산테"/><div className="champion_text">크산테</div>
                                            <input type="checkbox" className="champion" id="클레드"/><div className="champion_text">클레드</div>
                                            <input type="checkbox" className="champion" id="키아나"/><div className="champion_text">키아나</div>
                                            <input type="checkbox" className="champion" id="킨드레드"/><div className="champion_text">킨드레드</div>
                                            <input type="checkbox" className="champion" id="타릭"/><div className="champion_text">타릭</div>
                                        </div>
                                        <div className="list" id="list30">
                                            <input type="checkbox" className="champion" id="탈론"/><div className="champion_text">탈론</div>
                                            <input type="checkbox" className="champion" id="탈리야"/><div className="champion_text">탈리야</div>
                                            <input type="checkbox" className="champion" id="탐 켄치"/><div className="champion_text">탐 켄치</div>
                                            <input type="checkbox" className="champion" id="트런들"/><div className="champion_text">트런들</div>
                                            <input type="checkbox" className="champion" id="트리스타나"/><div className="champion_text">트리스타나</div>
                                        </div>
                                        <div className="list" id="list31">
                                            <input type="checkbox" className="champion" id="트린다미어"/><div className="champion_text">트린다미어</div>
                                            <input type="checkbox" className="champion" id="트위스티드 페이트"/><div className="champion_text">트위스티드 페이트</div>
                                            <input type="checkbox" className="champion" id="트위치"/><div className="champion_text">트위치</div>
                                            <input type="checkbox" className="champion" id="티모"/><div className="champion_text">티모</div>
                                            <input type="checkbox" className="champion" id="파이크"/><div className="champion_text">파이크</div>
                                        </div>
                                        <div className="list" id="list32">
                                            <input type="checkbox" className="champion" id="판테온"/><div className="champion_text">판테온</div>
                                            <input type="checkbox" className="champion" id="피들스틱"/><div className="champion_text">피들스틱</div>
                                            <input type="checkbox" className="champion" id="피오라"/><div className="champion_text">피오라</div>
                                            <input type="checkbox" className="champion" id="피즈"/><div className="champion_text">피즈</div>
                                            <input type="checkbox" className="champion" id="하이머딩거"/><div className="champion_text">하이머딩거</div>
                                        </div>
                                        <div className="list" id="list33">
                                            <input type="checkbox" className="champion" id="헤카림"/><div className="champion_text">헤카림</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
      
    );
  }

  export default Mypage;