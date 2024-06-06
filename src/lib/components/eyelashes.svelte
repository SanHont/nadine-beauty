<script>
    export let data;
</script>

<section>
    <article>
        <div>
             <h2>{data.nadineBeauties[0].eyelashesTitle}</h2>
            <p>{data.nadineBeauties[0].eyelashesText}</p>
        </div>
<div class="image-div">
    <img src="{data.nadineBeauties[0].eyelashesImage.url}" alt="{data.nadineBeauties[0].eyelashsTitle} </" >
</div>
</article>
</section>


<style>
    section{
        display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
        background-color: var(--gradient-bg);

    }
    article{
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
    }
    p{
        max-width: 70ch;
        color: black;
    }
    .image-div{
     display: flex;
     flex-direction: row;
     justify-content: flex-end;
     margin: 0;
     width: 100%;
    }
    img{
        margin: 1em 0 0 0 ;
        width: 70%; 
    }
    @media screen and (min-width: 48em) {
        article{
            gap: 6em;
            display: flex;
            flex-direction: column;
        }
        div{
            margin: 0;
        }
    }

</style>