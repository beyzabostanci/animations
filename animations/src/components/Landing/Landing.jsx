import Card from "../Card/Card"

export default function Landing(){
    return <>
    <div class="parallax flex justify-center">
    {/*<div class="fixed">WELCOME</div>*/}
    <div class="neon-wrapper">
     <span class="txt" >Welcome</span>
     <span class="gradient"></span>
     <span class="dodge"></span>
</div>
    <Card/>
    <div class="parallax__layer parallax__layer--back">
      <div class="starfield">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="parallax__layer parallax__layer--back2">
      <div class="starfield">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="parallax__layer parallax__layer--back3">
      <div class="starfield">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="parallax__layer parallax__layer--base">
      <div class="starfield">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

  </div>

    </>
}