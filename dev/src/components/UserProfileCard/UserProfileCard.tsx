import type React from "react"
import type { UserProfileCardProps } from "../../types"

const DEFAULT_AVATAR = "https://imgs.search.brave.com/JrV-ef8DyMCLDlNVbJ6pdWSeIguq2O-sS3udVHANWFs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTQv/NDYyLzU2NC9zbWFs/bC9ibHVlLXNpbGhv/dWV0dGUtZm9yLWdl/bmVyaWMtdXNlci1w/cm9maWxlLWF2YXRh/ci1wbGFjZWhvbGRl/ci1mcmVlLXZlY3Rv/ci5qcGc"

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
    user,
    showEmail = false,
    showRole = false,
    onEdit
    }) => {

    return(
        <div className="card bg-base-100 w-96 shadow-sm mx-auto">
            <div className="flex ">
                <div className="flex justify-center items-center avatar ms-10 mt-5">
                    <div className="w-24 rounded-full">
                        <img src={user.avatarUrl ? user.avatarUrl : DEFAULT_AVATAR} />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user.name}</h2>
                    {showEmail && <p>{user.email}</p>}
                    {showRole && <p>{user.role}</p>}
                </div>
            </div>
            <div className="card-actions mx-auto mt-5 mb-5">
                <button className="btn"
                        onClick={() => onEdit?.(user.id)}>
                    Edit Profile
                </button>
            </div>
        </div>
    )
}