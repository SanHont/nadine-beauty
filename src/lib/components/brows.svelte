<script>
    export let data;
</script>
<section>
    <article>
        <div class="image-div">
            <img src="{data.nadineBeauties[0].browsImage.url}" alt="{data.nadineBeauties[0].browsTitle} </" >
        </div>
        <div>
             <h2>{data.nadineBeauties[0].browsTitle}</h2>
            <p>{data.nadineBeauties[0].browsText}</p>
        </div>

</article>
</section>
<style>
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
article{
    display: flex;
    flex-direction: column-reverse;
  padding: 1em 0 0 0;
  
}
div{
    width: 70%;
    margin: auto;
}
h2{
    font-size: 3em;
    margin: 0.7em 0;
    font-weight: 500;
    color: var(--about-me-text-color);
}
p{  
		color: var(--about-me-text-color)
}
.image-div{
 display: flex;
 flex-direction: row;
 margin: 0;
 width: 100%;
}
img{
    margin: 1em 0 0 0 ;
    width: 70%; 
}
@media screen and (min-width: 48em) {
    article{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 6em;
        width: 70%;
    }
    img{
    margin: 3em 0 0 0 ;
    width: 60%; 
}
    div{
        margin: auto;
        float: inline-end;
    }
}

</style>