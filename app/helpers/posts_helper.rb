module PostsHelper

    def display_users_posts
        posts = User.find(@user[:id]).posts
        return nil if posts.count.zero?
        return posts
    end

    def display_accounts_posts
        posts = User.find(current_user[:id]).posts 
        return nil if posts.count.zero?
        return posts
    end

    def display_n_words(body, n)
        p = body.split(' ')[0..(n-1)].join(" ")
        p+= "..." if p.size != body.size
        return p
    end
end
